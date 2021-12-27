package com.reactnativehmssdk

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.media.projection.MediaProjectionManager
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import live.hms.video.error.HMSException
import live.hms.video.sdk.HMSActionResultListener

class HmsScreenshareActivity : ComponentActivity() {
  private var isScreenShared = false
  private var resultLauncher: ActivityResultLauncher<Intent> =
      this.registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
          val mediaProjectionPermissionResultData: Intent? = result.data
          val id = intent.getStringExtra("id")
          HmsModule.hmsCollection[id]?.hmsSDK?.startScreenshare(
              object : HMSActionResultListener {
                override fun onError(error: HMSException) {
                  finish()
                  HmsModule.hmsCollection[id]?.emitHMSError(error)
                }
                override fun onSuccess() {
                  isScreenShared = true
                  finish()
                }
              },
              mediaProjectionPermissionResultData
          )
        } else {
          finish()
        }
      }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    startScreenshare()
  }

  fun startScreenshare() {
    if (!isScreenShared) {
      try {
        val mediaProjectionManager =
            getSystemService(Context.MEDIA_PROJECTION_SERVICE) as MediaProjectionManager
        resultLauncher.launch(mediaProjectionManager.createScreenCaptureIntent())
      } catch (e: Exception) {
        println(e)
      }
    } else {
      val id = intent.getStringExtra("id")
      HmsModule.hmsCollection[id]?.emitHMSError(
          HMSException(
              103,
              "SCREENSHARE_IS_ALREADY_RUNNING",
              "SCREENSHARE_IS_ALREADY_RUNNING",
              "SCREENSHARE_IS_ALREADY_RUNNING",
              "SCREENSHARE_IS_ALREADY_RUNNING"
          )
      )
    }
  }
}
