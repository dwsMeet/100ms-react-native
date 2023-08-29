import { HMSTrackSource, HMSTrackType } from '@100mslive/react-native-hms';

/**
 * returns `uniqueId` for a given `peer` and `track` combination
 */
export const getPeerTrackNodeId = (peer, track) => {
	return peer.peerID + (track?.source ?? HMSTrackSource.REGULAR);
}

/**
 * creates `PeerTrackNode` object for given `peer` and `track` combination
 */
export const createPeerTrackNode = (
	peer,
	track,
) => {
	let isVideoTrack = false;
	if (track && track?.type === HMSTrackType.VIDEO) {
		isVideoTrack = true;
	}
	const videoTrack = isVideoTrack ? track : undefined;
	return {
		id: getPeerTrackNodeId(peer, track),
		peer: peer,
		track: videoTrack,
		isDegraded: false,
	};
};

/**
 * Removes all nodes which has `peer` with `id` same as the given `peerID`.
 */
export const removeNodeWithPeerId = (nodes, peerID) => {
	return nodes.filter(node => node.peer.peerID !== peerID);
};

/**
 * Updates `peer` of `PeerTrackNode` objects which has `peer` with `peerID` same as the given `peerID`.
 * 
 * If `createNew` is passed as `true` and no `PeerTrackNode` exists with `id` same as `uniqueId` generated from given `peer` and `track`
 * then new `PeerTrackNode` object will be created.
 */
export const updateNodeWithPeer = (data) => {
  const { nodes, peer, createNew } = data;

	const peerExists = nodes.some(node => node.peer.peerID === peer.peerID);

	if (peerExists) {
		return nodes.map(node => {
			if (node.peer.peerID === peer.peerID) {
				return { ...node, peer };
			}
			return node;
		});
	}

	if (!createNew) {
		return nodes;
	}

	if (peer.isLocal) {
		return [createPeerTrackNode(peer), ...nodes];
	}

	return [...nodes, createPeerTrackNode(peer)];
};

/**
 * Removes all nodes which has `id` same as `uniqueId` generated from given `peer` and `track`.
 */
export const removeNode = (nodes, peer, track) => {
	const uniqueId = getPeerTrackNodeId(peer, track);

	return nodes.filter(node => node.id !== uniqueId);
};

/**
 * Removes `track` from the nodes which has `id` same as `uniqueId` generated from given `peer` and `track`.
 */
export const removeTrackFromNodes = (nodes, peer, track) => {
	const uniqueId = getPeerTrackNodeId(peer, track);

	return nodes.map(node => node.id === uniqueId ? { ...node, peer, track: undefined } : node);
};

/**
 * Updates `track` and `peer` of `PeerTrackNode` objects which has `id` same as `uniqueId` generated from given `peer` and `track`.
 * 
 * If `createNew` is passed as `true` and no `PeerTrackNode` exists with `id` same as `uniqueId` generated from given `peer` and `track`
 * then new `PeerTrackNode` object will be created 
 */
export const updateNode = (data) => {
	const {nodes, peer, track, isDegraded, createNew} = data;
  
  const uniqueId = getPeerTrackNodeId(peer, track);

	const nodeExists = nodes.some(node => node.id === uniqueId);

	if (nodeExists) {
		return nodes.map(node => {
			if (node.id === uniqueId) {
				return { ...node, peer, track, isDegraded: isDegraded ?? node.isDegraded };
			}
			return node;
		});
	}

	if (!createNew) {
		return nodes;
	}

	if (peer.isLocal) {
		return [createPeerTrackNode(peer, track), ...nodes];
	}

	return [...nodes, createPeerTrackNode(peer, track)];
};
