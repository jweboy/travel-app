export default {
  singlePhoto: {
    width: 400,
    height: 400,
    mediaType: 'photo', // 媒体类型
    cropping: true, // 裁剪
    cropperCircleOverlay: true, // 圆形裁剪蒙版
    compressImageMaxWidth: 640,
    compressImageMaxHeight: 480,
    compressImageQuality: 0.5,
    includeBase64: true, // base64
    loadingLabelText: '等待中……'
    // includeExif: false,
    // multiple: true
  }
}