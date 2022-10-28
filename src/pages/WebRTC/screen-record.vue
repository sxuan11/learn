<template>
  <div>使用提示: 先开启屏幕录制后才可以进行后续操作，使用屏幕共享</div>
  <el-button @click="startLocalRecord">开启本地屏幕录制</el-button>
  <el-button @click="endLocalRecord" type="danger">结束本地屏幕录制</el-button>
  <el-button @click="replayLocalRecord" type="info">回放本地屏幕录制</el-button>
  <el-button @click="downloadLocalRecord" type="success">下载本地屏幕录制</el-button>
  <div>
    <video autoplay muted id="screenVideo"></video>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
let screenStream: MediaStream | null = null;
let blobMedia: (Blob)[] = [];
let mediaRecord: MediaRecorder
// ---------------本地屏幕录制-----------------

const startLocalRecord = async  () => {
  if(screenStream) {
    ElMessage.error('当前已经在录制了')
    return;
  }
  blobMedia = [];
  try {
    screenStream = await navigator.mediaDevices.getDisplayMedia();

    screenStream.getVideoTracks()[0].addEventListener('ended', () => {
      ElMessage.warning('用户中断了屏幕共享');
      endLocalRecord()
    })

    mediaRecord = new MediaRecorder(screenStream, { mimeType: 'video/webm' });

    mediaRecord.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        blobMedia.push(e.data);
      }
    };

    mediaRecord.start(500)
    ElMessage.success('开始录制成功');
  } catch (e) {
    ElMessage.warning(`屏幕共享失败->${e}`);
  }
}

const endLocalRecord = async () => {
  if(!mediaRecord || mediaRecord.state !== 'recording') {
    ElMessage.warning('录制还未开始');
    return;
  }
  mediaRecord.stop();
  screenStream?.getTracks().forEach(track => track.stop());
  screenStream = null;
}

const replayLocalRecord = async () => {
  if (blobMedia.length) {
    const scVideo = document.querySelector('#screenVideo') as HTMLVideoElement;
    const blob = new Blob(blobMedia, { type:'video/webm' })
    if(scVideo) {
      scVideo.src = URL.createObjectURL(blob);
    }
  } else {
    ElMessage.warning('没有录制文件');
  }
}

const downloadLocalRecord = async () => {
  if (!blobMedia.length) {
    ElMessage.warning('没有录制文件');
    return;
  }
  const blob = new Blob(blobMedia, { type: 'video/webm' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `录屏_${Date.now()}.webm`;
  a.click();
}

</script>

<style scoped>
#screenVideo {
  height: 80vh;
  width: 80vw;
  object-fit: contain;
}
</style>
