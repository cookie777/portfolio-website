---
title: | 
  RxSwift: How to adjust content's position when keyboard shows and dismisses.
date: '2021-07-21'
description: This post explains how to adjust content's position when a keyboard shows and dismisses. It is utilized by RxSwift. The key is creating an associated with UIResponder. This post also explains how to dismiss a keyboard when tapping an enter-key or when tapping outside of the keyboard with RxSwift.
image: https://raw.githubusercontent.com/cookie777/images/main/blogs/2021-07-RxSwift-keyboard-position/thumbnail.png
keywords: Swift, Keyboard, Notification,  NotificationCenter, RxSwift, Observable
---

## What you can know from this article

- How to change a position of content(view) when a keyboard shows up (and dismiss)
- How to dismiss a keyboard when you tap "Enter"
- How to dismiss a when you tap out of the keyboard

## Motivation

There are a lot of articles implementing these features by using just Notification center and `@objc` functions. However, there is little info about applying RxSwift. Besides, if we use RxSwift, we can make it more simple, concise. No more `@objc` nor  `delegate`

## Background

### Problem 1

By default, there is no method to dismiss a keyboard when you input "Enter" or when you tap outside of the keyboard. If you want to implement, you need `delegate` or `# selector`.

### Problem 2

When you put a textField and if its position is bottom, it will be hidden behind the keyboard so users can't see any results!

<img class="mobile-screen-capture" src="https://raw.githubusercontent.com/cookie777/images/main/blogs/2021-07-RxSwift-keyboard-position/fixed-position.webp" alt="text-field is hidden by keyboard" />

## Solution

All problems can be solved by using RxSwift (and RxCocoa)

### How to dismiss a keyboard when you tap  enter-key

In short, here is the code.

```swift
// Instance variables
  let textField = UITextField()
  let disposeBag = DisposeBag()
```

```swift
// When enter, dismiss keyboard
textField.rx
  .controlEvent(.editingDidEndOnExit)
  .bind {}
  .disposed(by: disposeBag)
```

Instead of using delegate function `textFieldDidEndEditing(_:)`, we can just use `rx` (reactive extension) of UITExtField, and `UIControl.Event`. In the bind closure, you can put whatever completion invoked after the keyboard is dismissed.

### How to dismiss a keyboard when tapping outside of it

In short, here is the code

```swift
// Add Gesture: when tap out of keyboard, dismiss it
let tapGesture = UITapGestureRecognizer()
view.addGestureRecognizer(tapGesture)

tapGesture.rx.event
  .bind { [weak self] _ in
    self?.view.endEditing(true)
  }
  .disposed(by: disposeBag)
```

We create a gesture recognizer and embed it into the view. This is the same as usual. However, instead of adding target, we use `rx.event`, which will emit an event (`UIGestureRecognizer`) when it is recognized. Actually, we don't use the event but use it as a trigger to call `view.endEditing(true)` this time.

The great point of these ways is not only simplicity. Because we can avoid using `#selector` and `@objc` functions, we can all write these codes in the same place.


### How to adjust the position(height) when the keyboard display and dismiss.

The conclusion is we can apply like this.

```swift
// Emit height when keyboard shows
let willShownObservable = NotificationCenter.default
  .rx.notification(UIResponder.keyboardWillShowNotification)
  .compactMap({ notification -> CGRect? in
    notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect
  })
  .map { rect in
    return rect.height
  }

// Emit 0 when keyboard dismiss
let willHideObservable = NotificationCenter.default
  .rx.notification(UIResponder.keyboardWillHideNotification)
  .map { _ -> CGFloat in
    return 0
  }

// combine observables and bind to transform
Observable.of(willShownObservable, willHideObservable)
  .merge()
  .bind { [weak view = self.view] height in
    view?.transform = CGAffineTransform(translationX: 0, y: -height)
  }
  .disposed(by: disposeBag)

```

What we are doing is we are creating two `Observable`(Publisher), one emits the keyboard height when it displays, the other emits 0 when it dismisses. After that, we `merge` two "observables" and bind them to modify the height of the view.

Through rx extension, we can also make the `NotificationCenter` emit event(notification).
The Observable of NotificationCenter is `UIResponder`. Thus,

```swift
 NotificationCenter.default.rx.notification(UIResponder.keyboardWillShowNotification)
```

means like a "NotificationCenter is looking a keyboard's behavior as `Observer` and also emit notification as `Observable` when the keyboard updates".

keyboard <---- NotificationCenter ----> compact, map ---> height

After that, we're just operating (cleaning) the event. We extract keyboard height from notification using `compactMap` and `map`. `compactMap` is just a filter no-`nil` object.

The final essence is merging two `Observable` and subscribe to them.

```swift
Observable.of(willShownObservable, willHideObservable)
  .merge()
```

This code merges two observables and creates another `Observable`. This means, whatever subscribes to this observable will get events from both keyboard displays and dismiss. The actions are the trigger. By using the `merge()`, we can avoid subscribing to each Observable.

```swift
view?.transform = CGAffineTransform(translationX: 0, y: -height)
```

This is just changing the `bounds`(center) by `transform`. You can change `NSLayoutConstraint` or change a `contentInset` of the scroll view. It depends on the situation and is up to you!

<img class="mobile-screen-capture" src="https://raw.githubusercontent.com/cookie777/images/main/blogs/2021-07-RxSwift-keyboard-position/dynamic-position.webp" alt="text-filed and others' position chages dynamically" />


## Conclusion

RxSwift is so powerful. The codes that I introduce this time can be implemented in one section. We can apply a reactive framework to a lot of existing features such as delegate, target(#selector), completion handler, and so on.

## Sample project

I put the sample project in my repository so you can check the code easily!

[Sample project](https://github.com/cookie777/SwiftTips/tree/main/ReactiveKeyboardHeight)

<!-- ref: https://kaushalelsewhere.medium.com/how-to-dismiss-keyboard-in-a-view-controller-of-ios-3b1bfe973ad1 -->