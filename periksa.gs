var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/");
var sheet = ss.getSheetByName("pml");

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

  var idruta = e.parameter.idruta;
  var nks = e.parameter.nks;
  var nus = e.parameter.nus;
  var hasil = e.parameter.hasil;
  var krt = e.parameter.krt;
  var art = e.parameter.art;
  var usiakerja = e.parameter.usiakerja;
  var kerja = e.parameter.kerja;
  var pengangguran = e.parameter.pengangguran;
  var sekolah = e.parameter.sekolah;
  var irt = e.parameter.irt;
  var lainnya = e.parameter.lainnya;
  var catatan = e.parameter.catatan;
  var tgl = e.parameter.tgl;

  
  var flag=1;
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var id1 = sheet.getRange(i, 1).getValue(); // Ashton: column index changed from 2 to 1
    if(id1==idruta){
      flag=0;
      sheet.getRange(i,2).setValue(nks);
      sheet.getRange(i,3).setValue(nus);
      sheet.getRange(i,4).setValue(hasil);
      sheet.getRange(i,5).setValue(krt);
      sheet.getRange(i,6).setValue(art);
      sheet.getRange(i,7).setValue(usiakerja);
      sheet.getRange(i,8).setValue(kerja);
      sheet.getRange(i,9).setValue(pengangguran);
      sheet.getRange(i,10).setValue(sekolah);
      sheet.getRange(i,11).setValue(irt);
      sheet.getRange(i,12).setValue(lainnya);
      sheet.getRange(i,13).setValue(catatan);
      sheet.getRange(i,14).setValue(tgl);

      //var result= "ID Sudah ada";
     // break; // Ashton: break the loop if id is found, this will save some time if your list is huge
    } }
 // Logger.log(flag);
  //add new row with recieved parameter from client
  if(flag==1){
  var rowData = sheet.appendRow([idruta,nks,nus,hasil,krt,art,usiakerja,kerja,pengangguran,sekolah,irt,lainnya,catatan,tgl,new Date]);  
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
