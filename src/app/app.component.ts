import { Component } from '@angular/core';

interface PeppaInterface {
  name: string,
  sex: string,
  imgUrl: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peppa-pig';

  allCharacters: Array<PeppaInterface> = [
    {
      name: 'Peppa Pig',
      sex: 'female',
      imgUrl: 'https://i5.walmartimages.com/asr/40c4baef-703b-4d2a-8d3d-4e251453950d_1.2e9513fbb59279d2f86d8b9c85863e35.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
    },
    {
      name: 'Daddy Pig',
      sex: 'male',
      imgUrl: 'data:image/png;base64,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'
    },
    {
      name: 'Mummy Pig',
      sex: 'female',
      imgUrl: 'https://vignette.wikia.nocookie.net/peppapig/images/1/19/Mummy_Pig.png/revision/latest?cb=20181208163034'
    },
    {
      name: 'Georgie Pig',
      sex: 'male',
      imgUrl: 'https://www.partyrama.co.uk/wp-content/uploads/2014/02/peppa-pig-george-pig-lifesize-cardboard-cutout-60cms-product-image.jpg'
    },
    {
      name: 'Suzy Sheep',
      sex: 'female',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41L9FG9dB7L._SY450_.jpg'
    },
    {
      name: 'Danny Dog',
      sex: 'male',
      imgUrl: 'https://www.partyrama.co.uk/wp-content/uploads/2014/02/peppa-pig-danny-dog-lifesize-cardboard-cutout-78cms-product-image.jpg'
    },
    {
      name: 'Zoe Zebra',
      sex: 'female',
      imgUrl: 'https://www.partyrama.co.uk/wp-content/uploads/2014/02/peppa-pig-zoe-zebra-lifesize-cardboard-cutout-79cm-product-image.jpg'
    },
    {
      name: 'Pedro Pony',
      sex: 'male',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41HahXdyxCL._SX425_.jpg'
    },
  ];

  toDisplay: string = '';
  characters: Array<PeppaInterface> = [];

  showBoysOnly(): void {
    this.toDisplay = 'boys';
    this.characters = this.allCharacters.filter(character => character.sex === 'male');
  }

  showGirlsOnly(): void {
    this.toDisplay = 'girls';
    this.characters = this.allCharacters.filter(character => character.sex === 'female');
  }

  showEveryone(): void {
    this.toDisplay = 'everyone';
    this.characters = this.allCharacters;
  }

}
