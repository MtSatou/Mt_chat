/**
 * 图片转base64
 * @param { File } file 
 */
export const imageToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      // @ts-expect-error
      const base64String = event.target.result;
      resolve(base64String)
    };
    reader.readAsDataURL(file);
  })
}
