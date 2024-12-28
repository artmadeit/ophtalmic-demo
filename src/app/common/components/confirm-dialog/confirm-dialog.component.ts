import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class ConfirmDialogComponent {
  readonly data = inject<{ message: string }>(MAT_DIALOG_DATA);
}
