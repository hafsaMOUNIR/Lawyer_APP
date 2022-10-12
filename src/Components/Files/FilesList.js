import React from 'react';
import Files from './filesData.json';
import './files.css';

function FilesList() {
  return (
    <div className='files-container'>
      <ul>
        {Files.map((file) => {
          return (
            <li key={file.id} className="file-items" dir='rtl' lang='ar'>
              
              <div className='item'>
                <p className='fileId' dir='rtl' lang='ar'>رقم الملف:</p>
                <p className='fileId' dir='rtl' lang='ar'>{file.id}</p>
              </div>

              <div className='item'>
                <p className='fileTitle' dir='rtl' lang='ar'>عنوان الملف:</p>
                <p className='file-title' dir='rtl' lang='ar'>{file.Titre}</p>
              </div>

              <div className='item'>
              <p className='fileClient' dir='rtl' lang='ar'>الموكل:</p>
              <p className='file-clients' dir='rtl' lang='ar'>{file.Client}</p>
              </div>

              <div className='item'>
                <p className='fileJudge' dir='rtl' lang='ar'>القاضي:</p>
                <p className='file-judge' dir='rtl' lang='ar'>{file.Judge}</p>
              </div>

              <div className='item'>
                <p className='fileTribunal' dir='rtl' lang='ar'>المحكمة:</p>
                <p className='file-Tribunal' dir='rtl' lang='ar'>{file.Tribunal}</p>
              </div>

            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilesList