var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/19cKuaMTDEfaNAWOSB4UqE6wmjqFRlIJ9QUrVsgDKWW8/edit#gid=1040770888");
var sheet = ss.getSheetByName("sls");

function doGet(e){
  var action  = e.parameter.action;
 
  if(action == "tambah"){
    return Tambah(e, sheet);
  }
  
  if(action == "edit"){
    return Edit(e);
  }
  
   if(action == "hapus"){
    return Hapus(e);
  }
}

function doPost(e){
  var action  = e.parameter.action;
 
 
  if(action == "tambah"){
    return Tambah(e, sheet);
  }
  
  if(action == "edit"){
    return Edit(e);
  }
  
  if(action == "hapus"){
    return Hapus(e);
  }
}


function Tambah(e, sheet){
  
  var idnks = e.parameter.idnks;
  var nama = e.parameter.nama;
  var hp = e.parameter.hp;
  var rt = e.parameter.rt;
  var rw = e.parameter.rw;
  var ket = e.parameter.ket;
  var alamat = e.parameter.alamat;
  var koordinat = e.parameter.koordinat;
  var tgl = e.parameter.tgl;


  
  var flag=1;
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var id1 = sheet.getRange(i, 1).getValue(); // Ashton: column index changed from 2 to 1
    if(id1==idnks){
      flag=0;
      sheet.getRange(i,2).setValue(nama);
      sheet.getRange(i,3).setValue(hp);
      sheet.getRange(i,4).setValue(rt);
      sheet.getRange(i,5).setValue(rw);
      sheet.getRange(i,6).setValue(ket);
      sheet.getRange(i,7).setValue(alamat);
      sheet.getRange(i,8).setValue(koordinat);
      sheet.getRange(i,9).setValue(tgl);
      //sheet.getRange(i,10).setValue(new Date);
      //sheet.getRange(i,11).setValue(ada_tv);
      //sheet.getRange(i,12).setValue(ada_radio);

      //var result= "ID Sudah ada";
     // break; // Ashton: break the loop if id is found, this will save some time if your list is huge
    } }
 // Logger.log(flag);
  //add new row with recieved parameter from client
  if(flag==1){
  var rowData = sheet.appendRow([idnks,nama,hp,rt,rw,ket,alamat,koordinat,tgl,new Date]);  
  var result="Berhasil Input";
  }
     return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.TEXT);
    
  return ContentService.createTextOutput(e.parameter.callback + "(" + result + ")").setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }
  
function Edit(e){
  var id =  e.parameter.idkodenks;
  var values = sheet.getRange(2,1,sheet.getLastRow(),19).getValues();
  
  for(var i = 0;  i<values.length; i++){
    if(values[i][0]===id){
      i=i+2;
      
     // var nama = e.parameter.rubahnama;
     // var telp = e.parameter.rubahtelp;
     // var rt = e.parameter.rubahrt;
     // var rw = e.parameter.rubahrw;
      //var ket = e.parameter.rubahket;
      //var alamat = e.parameter.rubahalamat;
      //var koordinat = e.parameter.rubahkoordinat;
     // var tgl = e.parameter.rubahtgl;
     // var tstamp = e.parameter.rubahtstamp;
      //var ada_tv = e.parameter.rubahadatv;
      //var ada_radio = e.parameter.rubahadaradio;
      
      
      
      sheet.getRange(i,11).setValue(nama);
      sheet.getRange(i,12).setValue(telp);
      sheet.getRange(i,13).setValue(rt);
      sheet.getRange(i,14).setValue(rw);
      sheet.getRange(i,15).setValue(ket);
      sheet.getRange(i,16).setValue(alamat);
      sheet.getRange(i,17).setValue(koordinat);
      sheet.getRange(i,18).setValue(tgl);
      //sheet.getRange(i,19).setValue(new Date);
      //sheet.getRange(i,24).setValue(ada_tv);
      //sheet.getRange(i,25).setValue(ada_radio);
      
      
      
     
      
      
      
      return ContentService.createTextOutput("Berhasil menyimpan data!").setMimeType(ContentService.MimeType.TEXT);
      break;
      
    }
  }
  return ContentService.createTextOutput("ID SLS tidak ditemukan!").setMimeType(ContentService.MimeType. TEXT);
}

function Hapus(e){
  var id =  e.parameter.idbrg;
  var values = sheet.getRange(7,1,sheet.getLastRow(),22).getValues();
  
  for(var i = 0;  i<values.length; i++){
    if(values[i][0]==id){
      i=i+2;
      
        sheet.deleteRow(i);
      
      return ContentService.createTextOutput("Berhasil menghapus data!").setMimeType(ContentService.MimeType.TEXT);
      break;
      
    }
  }
  return ContentService.createTextOutput("ID tidak ditemukan!").setMimeType(ContentService.MimeType. TEXT);
}
