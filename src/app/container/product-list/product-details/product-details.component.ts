import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
product: any;
dialogRef: any;
  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: { product: any }, public MatDialogRef: MatDialogRef<ProductDetailsComponent>) {
    this.product = data.product;
  }

  ngOnInit(){
    console.log(this.product);
    
  }

  // Method to close the dialog
  closeDialog(): void {
    this.MatDialogRef.close();
  }

}
