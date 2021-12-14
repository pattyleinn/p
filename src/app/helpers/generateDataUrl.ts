export const generate_data_url = (img: string, callback:(data: any)=>void): any=>{
    var xhr = new XMLHttpRequest();
    xhr.open('get', img, true);
    xhr.responseType = 'blob';
    let result: any;
    xhr.onload = function(){
      var fr = new FileReader();
      fr.onload = function(){
          callback(this.result)
      };
      fr.readAsDataURL(xhr.response); 
    };
    return xhr.send()
}