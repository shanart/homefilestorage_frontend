import { Component } from '@angular/core';
import { faTimes, faUpload, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
    remove_icon = faTimes;
    upload_icon = faUpload;
    back_icon = faAngleLeft
}
