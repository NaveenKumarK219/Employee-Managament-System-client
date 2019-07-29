import { Component, OnInit, Input} from '@angular/core';
import daygrid from '@fullcalendar/daygrid';
import { LeaveService } from '../services/leave.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LeaveEvent } from '../models/leave-event';


@Component({
  selector: 'app-leave-calendar',
  templateUrl: './leave-calendar.component.html',
  styleUrls: ['./leave-calendar.component.scss']
})
export class LeaveCalendarComponent implements OnInit {

  leavesGrid = [daygrid];
  leaveEvents = [];

  constructor(private leaveService: LeaveService, private dialog: MatDialog) { }

  ngOnInit() {
    this.leaveService.getAllLeaves().subscribe(data => {
      this.leaveEvents = data;
      console.log(data);
    });
  }

  openLeaveForm() {
    const dialogRef = this.dialog.open(LeaveRequestFormComponent, {
        width: '50%'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data !== undefined) {
        console.log('Data From Dialog: ' + data);
        this.leaveEvents.push(data);
      }

    });
  }

}

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.html'
})
export class LeaveRequestFormComponent {

  leaveEvent = new LeaveEvent();

  constructor(private dialogRef: MatDialogRef<LeaveRequestFormComponent>) {}

  cancelForm() {
    this.dialogRef.close();
  }

}
