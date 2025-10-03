I am looking for a react app. 

The app is called Retailer Opportunities and it does the following.

There is no Authentication in the app.
The app should start with a dashboard page. The dashboard page should have a searchbar to search for a Retailer name. The search should support autocomplete and support Walmart, Kroger, Albertsons, Target, Walgreens.

Now when a retailer is searched the dashboard page should have the following layout:

1. Row 1
    a. A bar chart with X axis as Purchek, Containment, Cart Manager and Subscription. Y axis as a number between 0 to 100. The label for X will be solution, the label for Y will be Penetration %. The Title of the chart is `Current Penetration`
    b. A chart showing the retailer growth. A line chart with X axis as year from 2020 to 2025. Y axis as # of active stores. Show a growing line chart with number from 2500 to 3000. The title of the chart is Retailer Growth
    c. A stacked column chart with X axis as Year (2020 to 2025) and Y axis as revenue (between $2million to $4 million). Show a gradually increasing revenue with the Y axis categories as `New Install`, `Recurring`, `Reoccuring`. The label of the chart is Gatekeeper Revenue
    d. A chart with multiple lines. X axis label as Year (2020 to 2025), Y axis as number of installs (1000 to 1500). Individual lines for `Purchek`, `Containment`, `Cart Manager`, `Subscription`. The label of the chart is New Installs
2. Row 2: A set of cards. When a card is clicked, automatically a relevant filter should be applied or removed
    a. A number as KPI (the total number of records where Recommend Service is Y) and the label as `Service Recommended` 
    b. A number KPI (the total number of records where Recommend Purchek is Y) and the label as `Purchek Recommended` 
    c. A number as KPI (the total number of records where Recommend Containment is Y) and the label as `Containment Recommended` 
    d.  A number as KPI (the total number of records where Recommend Paired Wheel is Y) and the label as `Paired Wheels Recommended` 
3. Row 3: A table showing a store list. Generate some fake data for this (100 records). The table should have filtering, searching and sorting. The columns are:
    a. Store ID: A uuid
    b. Address1: The first part of the address. Only the door number and building name
    c. Zipcode: A randon US Zipcode
    d. Customer ID: A number like C123456 (a random 6 digit number prefixed by C -- Give this only to about 60% of the stores). Blank 40% of the times.
    e. Recommend Service: Y or blank
    f. Recommend Purchek: Y or blank
    g. Recommend Containment: Y or blank
    h. Recommend Paired Wheel: Y or blank. Can be Y only for rows where Customer ID is not blank.

Whenever any row is clicked, open a popup with the following details:
1. Store ID, Customer ID (if applicable), Address
2. A OpenStreetMap (or any map that doesn't require any API Key). With one Blue marker and other red markers
3. If Recommend Service is Y, then show a message that says `$ {RandomAmount} invested in the systems, not maintained from last {RandomNumber} months`. Where RandomAmount is a random number between 50000 and 80000. RandomNumber is another random number between 12 and 48
4. If Recommend Purchek is Y, then show either of two messages `Site is High Crime Area with Robbery index of {RandomCrimeIndex} with US average being 100`. RandomCrimeIndex being a random number between 120. 
5. If Recommend Purchek is Y, show that `The store is surrounded by {RandomSites} Purchek Customers with documented Pushout events`.  RandomSites being a random number between 3 to 15.
6. If Recommend Containment is Y, show that `The store is required to have a Containment solution by law`
7. If Recommend Paired Wheel is Y and Customer ID is not blank. Show a message that `There are Pushout events and Cart Thefts, so paired wheels are recommended`

