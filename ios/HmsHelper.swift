import HMSSDK
import Foundation

class HmsHelper: NSObject {
    
    static func getPeerFromPeerId(_ peerID: String?, remotePeers: [HMSRemotePeer]?) -> HMSPeer? {
        
        guard let peerID = peerID, let peers = remotePeers else { return nil }

        return peers.first { $0.peerID == peerID }
    }
    
    
    static func getRolesFromRoleNames(_ targetedRoles: [String]?, roles: [HMSRole]?) -> [HMSRole] {

        guard let roles = roles,
              let targetedRoles = targetedRoles
        else { return [HMSRole]() }
        
        return roles.filter { targetedRoles.contains($0.name) }
    }
    
    
    static func getRoleFromRoleName(_ role: String?, roles: [HMSRole]?) -> HMSRole? {
        
        guard let roles = roles, let roleName = role else { return nil }
        
        return roles.first { $0.name == roleName }
    }
    
    static func getLocalTrackFromTrackId(_ trackID: String?, localPeer: HMSLocalPeer?) -> HMSTrack? {
        if localPeer?.videoTrack?.trackId == trackID {
            return localPeer?.videoTrack
        }
        
        if localPeer?.audioTrack?.trackId == trackID {
            return localPeer?.audioTrack
        }
        
        for track in localPeer?.auxiliaryTracks ?? [] where track.trackId == trackID {
            return track
        }
        
        return nil
    }
    
    static func getRemoteAudioTrackFromTrackId(_ trackID: String?, _ remotePeers: [HMSRemotePeer]?) -> HMSRemoteAudioTrack? {
        for peer in remotePeers ?? [] {
            if peer.audioTrack?.trackId == trackID {
                return peer.audioTrack as? HMSRemoteAudioTrack
            }
        }
        return nil
    }
    
    static func getRemoteAudioAuxiliaryTrackFromTrackId(_ trackID: String?, _ remotePeers: [HMSRemotePeer]?) -> HMSRemoteAudioTrack? {
        for peer in remotePeers ?? [] {
            if peer.audioTrack?.trackId == trackID {
                return peer.audioTrack as? HMSRemoteAudioTrack
            }
            let auxTracks = peer.auxiliaryTracks
            
            for track in auxTracks ?? [] {
                if (track.kind == HMSTrackKind.audio && track.trackId == trackID) {
                    return track as? HMSRemoteAudioTrack
                }
            }
        }
        return nil
    }
    
    static func getRemoteVideoTrackFromTrackId(_ trackID: String?, _ remotePeers: [HMSRemotePeer]?) -> HMSRemoteVideoTrack? {
        for peer in remotePeers ?? [] {
            if peer.videoTrack?.trackId == trackID {
                return peer.videoTrack as? HMSRemoteVideoTrack
            }
        }
        return nil
    }
    
    static func getHmsTrackType(_ kind: HMSTrackKind?) -> String? {
        if(kind == HMSTrackKind.video){
            return "VIDEO"
        }else if(kind == HMSTrackKind.audio){
            return "AUDIO"
        }
        return nil
    }
    
    static func getTrackFromTrackId(_ trackID: String?, _ remotePeers: [HMSRemotePeer]?) -> HMSTrack? {
        
        for peer in remotePeers ?? [] {
            if peer.videoTrack?.trackId == trackID {
                return peer.videoTrack
            }
            
            if peer.audioTrack?.trackId == trackID {
                return peer.audioTrack
            }
            
            for track in peer.auxiliaryTracks ?? [] where track.trackId == trackID {
                return track
            }
        }
        
        return nil
    }
    
    static func getHms(_ credentials: NSDictionary, _ hmsCollection: [String: HmsSDK]) -> HmsSDK? {
        guard let id = credentials.value(forKey: "id") as? String,
              let hms = hmsCollection[id]
        else {
            return nil
        }
        return hms
    }
    
    static func getLocalVideoSettings(_ settings: NSDictionary?) -> HMSVideoTrackSettings? {
        guard let data = settings,
              let codec = data.value(forKey: "codec") as? String,
              let resolution = data.value(forKey: "resolution") as? [String : Double]?,
              let maxBitrate = data.value(forKey: "maxBitrate") as? Int,
              let maxFrameRate = data.value(forKey: "maxFrameRate") as? Int,
              let cameraFacing = data.value(forKey: "cameraFacing") as? String,
              let trackDescription = data.value(forKey: "trackDescription") as? String?,
              let resolutionObj = HmsHelper.getVideoResolution(resolution ?? [:])
        else {
            return nil
        }
        let codecEncoded = HmsHelper.getVideoCodec(codec)
        let cameraFacingEncoded = HmsHelper.getCameraFacing(cameraFacing)
        let hmsTrackSettings = HMSVideoTrackSettings(codec: codecEncoded, resolution: resolutionObj, maxBitrate: maxBitrate, maxFrameRate: maxFrameRate, cameraFacing: cameraFacingEncoded, trackDescription: trackDescription)
        return hmsTrackSettings
    }
    
    static func getLocalAudioSettings(_ settings: NSDictionary?) -> HMSAudioTrackSettings? {
        guard let data = settings,
              let maxBitrate = data.value(forKey: "maxBitrate") as? Int,
              let trackDescription = data.value(forKey: "trackDescription") as? String?
        else {
            return nil
        }
        let hmsTrackSettings = HMSAudioTrackSettings(maxBitrate: maxBitrate, trackDescription: trackDescription)
        return hmsTrackSettings
    }
    
    static func getVideoResolution(_ data: [String : Double]) -> HMSVideoResolution? {
        guard let width = data["width"],
              let height = data["height"]
        else {
            return nil
        }
        
        return HMSVideoResolution.init(width: width, height: height)
    }
    
    static func getVideoCodec(_ codecString: String?) -> HMSCodec {
        switch codecString {
        case "h264":
            return HMSCodec.H264
        case "vp8":
            return HMSCodec.VP8
        default:
            return HMSCodec.H264
        }
    }
    
    static func getCameraFacing(_ cameraFacing: String) -> HMSCameraFacing {
        switch cameraFacing {
        case "FRONT":
            return HMSCameraFacing.front
        case "BACK":
            return HMSCameraFacing.back
        default:
            return HMSCameraFacing.front
        }
    }
}
