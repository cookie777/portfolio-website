---
title: 'iOS: Hang out Planner'
date: '2021-01-15'
description: 'I created an native iOS application with Swift. This apps suggests optimized root which includes locations that the user prefer. This apps uses modern collection views with diffable data source, async api-fetch with dispatch group.'
image: https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/thumbnail.webp
---

## Concept

### Basic

Hang-Out-Planner is an application which instantly auto-generates a daily plan.
This apps suggests optimized root which includes locations some location fetched from yelp.

### Usage flow

The user first select some categories of locations with the order. Then the app will fetch locations surrounded by user and calculates auto suggests the best (most famous and closest) route includes locations that belong to category user has chosen. 

For example, if a user choose 'Restaurant' ➔ 'Nature, Park' ➔ 'Art' in New york, the app will suggests the route 'SHAKE SHACK' ➔ 'Central Park' ➔ 'Carnegie Hall'.

## Spec

- Swift: version 5.4
- MapKit: To display route and user location
- Core Location: To get user current location
- REST-API: Get external location data from yelp.
- Collection View: With diffable data source.

## Repository

The latest version of this project is as follows.

[Hang-Out-Planner](https://github.com/cookie777/Hang-Out-Planner/tree/yanmer-HOPplus-coreData)

## Usage and Gallery

1. A user selects some categories with their preferred order. 
2. After deciding categories, list of plans are displayed to user.
3. After selecting a plan, a user can look its details with route on map, distance, cost and so on.
4. Of course, user can see each location's data.

<div style="
  display: inline-flex;
  gap: 16px;
">
  <img src="https://user-images.githubusercontent.com/60034714/106401685-4d8c6900-63da-11eb-9f38-24f14c4ce184.gif" alt="select categories"  width="200" />

  <img  src="https://user-images.githubusercontent.com/60034714/106401769-b96ed180-63da-11eb-878b-c970cc916a1d.gif"  alt="select a plan"  width="200"/>

  <img src="https://user-images.githubusercontent.com/60034714/106427560-76355280-641c-11eb-80b3-87fab3348385.gif" alt="look the plan detail" width="200" />

  <img   src="https://user-images.githubusercontent.com/60034714/106401877-8416b380-63db-11eb-8f2c-987cf2e1dc53.png" alt="See each location" width="200"/>

</div>

## My contribution

### Team manager

As a team manager, I manage whole schedule and design architecture. 

I used notion for scheduling and used agile style. This makes this project to complete with just two weeks!

![Schedules](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/manager-schedule.webp)
![Docs](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/manager-docs.webp)
![Tasks](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/manager-requirements.webp)


### UI Designer

As a UI Designer, I created whole UI mock using Figma. In addition to creating style guide, I create design components that are well suitable for implementing swift codes.

![UI mock 1](https://github.com/cookie777/images/blob/main/works/2021-01-Hang-Out-Planner/ui-mock1.webp?raw=true)
![UI mock 2](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/ui-mock2.webp)

### Back-end developer

As a back end developer, I design architecture and algorithm of fetching and suggesting items. I also creating tracking of user location by using core location.

#### Fetching user location

The app fetch user's location by two ways, locationManager and ip address.
When you visit to the target screen, we set location manager to start fetching his/her location. Even a user denies it, we can assume approximate location by using ip address from api.

![Fetching location](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/back-end-location.webp)


This function will be executed at `sceneWillEnterForeground` and `viewWillAppear`

```swift
extension LocationController {
  /// Start updating(tacking) user location
  /// - Parameter completion: an action you want to do when the user location is updated.
  func start(completion : @escaping(()->Void)) {
    locationManager.requestAlwaysAuthorization()
    locationManager.startUpdatingLocation()
    isUpdatingLocation = true
    self.completionDidLocationUpdated = completion
  }
```

#### How to suggest the routes

![DispatchGroup](https://raw.githubusercontent.com/cookie777/images/main/works/2021-01-Hang-Out-Planner/back-end-fetching.webp)

After a user decides their categories, this app asks api (yelp) to fetch related locations. It will ask serval times to get different time. These fetching are executed as **async and concurrently**. Once all fetching have complete, we proceed to next step. These processes were realized by using `DispatchGroup`.

```swift
    group.enter()
    NetworkController.shared.fetchLocations(
      group : group,
      category:CategoriesForAPI.amusement,
      completion: NetworkController.shared.convertAndStoreLocation
    )
```

```swift
    // This is executed after "all fetch are done"
    group.notify(queue: .main) {
      
      // Creating final locations with adding user location and assigning id.
      User.allLocations.removeAll()
      User.allLocations = [User.userLocation] + NetworkController.shared.tempAllLocations
      (0..<User.allLocations.count).forEach{User.allLocations[$0].id = $0}
      // Remove temp data for memory saving.
      NetworkController.shared.tempAllLocations.removeAll()
      
      completion()
      
    }
```

## Team member

### Tak (me :[cookie777](https://github.com/cookie777))

- Team manager
- UI Designer
- Back end developer

### Yumi (`YumiMachin`)

- Front end 
- Back end (implement image api fetching)


### Kengo (`kengo-taka`)

- Front end
- Created ReadMe, Docs.

## Future work

What we're planing to do next is as follows.

- Store plans as permanent data using core data or realm
- Publish in app store
- Implement user account by using firebase


