function base64Convertion(e) {
  // get the file upload by the user
  const image = e.target.files[0];
  // FileReader object lets web applications asynchronously read
  // the contents of files (or raw data buffers) stored on the user's computer
  const reader = new FileReader();

  // create new Promise to wait for this asynchronous task to finish
  return new Promise((resolve, reject) => {
    reader.onload = function () {
      // btoa() creates a base-64 encoded ASCII string from a "string"
      // of binary data ("btoa" should be read as "binary to ASCII").
      resolve(btoa(reader.result));
    };
    reader.readAsBinaryString(image);
  });
}

export default base64Convertion;
