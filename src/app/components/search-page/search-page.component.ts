import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
// @ts-ignore
import algoliasearch from 'algoliasearch/lite';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AudioDBresults } from '../../types/artist';

const searchClient = algoliasearch(
  'HAYJWBVFJR',
  '59ca0f7b12d01ee6997cf004857d8d11'
);

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  public searchQuery: string;
  public searchResult: any[];
  public startDate: number;
  public endDate: number;
  public startDateFixed: number;
  public endDateFixed: number;

  config = {
    indexName: 'concerts',
    searchClient
  };

  constructor(
    private search: SearchService,
    private datePipe: DatePipe,
    private http: HttpClient,
    public modalService: NgxSmartModalService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit( f: NgForm ): void {
    this.search.query(f.value.query).then(res => {
      this.searchResult = res.hits;
    });
  }

  onClick( name: string ): void {
    this.http.get('https://theaudiodb.com/api/v1/json/1/search.php?s=' + name).subscribe(( res: AudioDBresults ) => {
      const resultObj = {
        bio: '',
        thumb: '',
        banner: '',
        logo: '',
        style: '',
        year: ''
      };

      if (res && res.artists && res.artists.length) {
        resultObj.bio = res.artists[0].strBiographyEN;
        // resultObj.thumb = res.artists[0].strArtistThumb;
        resultObj.banner = res.artists[0].strArtistBanner || res.artists[0].strArtistLogo;
        resultObj.style = res.artists[0].strStyle;
        resultObj.year = res.artists[0].intFormedYear;
      }

      this.openModal(resultObj);
    });

  }

  openModal( obj ): void {
    this.modalService.resetModalData('infoModal');
    this.modalService.setModalData(JSON.parse(JSON.stringify(obj)), 'infoModal');
    this.modalService.getModal('infoModal').open();
  }

  fixDate( which: string ): void {
    if (which === 'start') {
      const date = new Date(this.startDate);
      this.startDateFixed = date.getTime();
    } else if (which === 'end'){
      const date = new Date(this.endDate);
      this.endDateFixed = date.getTime();
    }
  }

  resetDate(): void {
    this.startDateFixed = null;
    this.endDateFixed = null;
    this.startDate = null;
    this.endDate = null;
  }
}
