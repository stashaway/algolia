# AlgoliaTakehome

This project is a demonstration of Algolia InstantSearch using Angular 9.

I used a provided dataset of concert info. The dataset included 3 data points- Band name, Location of the show, and the date. I wanted to let the user access all of that data any way they liked, so I used a full text, autocompleting search widget for the name and location and an optional filter to limit the results by date as well. In this example, I don't show any results until there is a query, but instead, conditionally show some user feedback/instruction.

I also used a second API called TheAudioDB to grab some information about each band, which is displayed if the user clicks on any result. Not every band had data in that API, but many do, and when available, I grabbed their bio as well as a banner graphic (with a fallback to a logo) and their genre and formation year information.

I enjoyed this exercise, and thought the documentation of the Algolia InstantSearch product was very well done. The angular drop-ins worked very well.

One note- My first iteration did the searching manually in a service. I orphaned that approach, but left the code.
