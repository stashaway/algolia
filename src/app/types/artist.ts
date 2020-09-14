export interface Artist {
  strBiographyEN?: string;
  strArtistThumb?: string;
  strArtistBanner?: string;
  strArtistLogo?: string;
  strStyle?: string;
  intFormedYear?: string;
}

export interface AudioDBresults {
  artists?: Artist[];
}
