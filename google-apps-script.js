// ============================================================
// AbsensiKu — Google Apps Script
// Salin kode ini ke https://script.google.com
// Lalu Deploy → New deployment → Web App
// Execute as: Me | Who has access: Anyone
// Salin URL deployment dan paste ke aplikasi (Profil → Google Sheets)
// ============================================================

const SHEET_NAME = 'Absensi';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Buat sheet jika belum ada
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Tanggal', 'Nama', 'NIK', 'Departemen',
        'Tipe', 'Waktu', 'Alamat', 'Latitude', 'Longitude',
        'Email', 'Timestamp'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#1d4ed8').setFontColor('white');
      sheet.setFrozenRows(1);
    }

    if (data.action === 'addRecord') {
      // Tambah satu baris
      sheet.appendRow([
        data.date || '',
        data.name || '',
        data.nik || '',
        data.dept || '',
        data.type === 'in' ? 'Clock In' : 'Clock Out',
        data.time || '',
        data.address || '',
        data.lat || '',
        data.lng || '',
        data.email || '',
        data.timestamp || new Date().toISOString()
      ]);
    }

    if (data.action === 'export') {
      // Bulk export
      const rows = data.rows || [];
      rows.forEach(r => {
        sheet.appendRow([
          r.date, r.name, r.nik, r.dept,
          r.type, r.time, r.address,
          r.lat, r.lng, r.email || '', ''
        ]);
      });
    }

    // Auto-resize kolom
    sheet.autoResizeColumns(1, 11);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', rows: data.rows ? data.rows.length : 1 }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'AbsensiKu webhook aktif' }))
    .setMimeType(ContentService.MimeType.JSON);
}
