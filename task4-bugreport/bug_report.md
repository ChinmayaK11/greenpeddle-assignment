## Title
Amazon app does not preserve review filter and scroll position after exiting review section

## Steps to Reproduce
1. Open the Amazon app.
2. Open any product page.
3. Scroll to the Customer Reviews section.
4. Tap on "See all reviews".
5. Apply the 5-star review filter.
6. Exit the review page by pressing cancel or back button and return to product details.

## Expected Behaviour
After exiting reviews, the app should preserve user context by:
- Returning near the Customer Reviews section
- Keeping the applied review filter active

## Actual Behaviour
In most attempts, after exiting the review page:
- The app returned to the top of the product page
- The applied review filter was removed

*In one or two attempts, the behaviour appeared normal and returned correctly, making the issue seem inconsistent*

## Severity
Low (UX / Navigation Issue)

## Reason
This issue does not affect ordering, payments, or core functionality. However, it interrupts product evaluation flow and makes users repeat navigation and filtering steps while reading reviews. 

## Screenshot or Evidence (attached in the repo)
Attaching screenshot showing:
- 5-star filter applied inside reviews
- After exiting, the user is returned to the top of the product page
Saved image as:
screenshot.png 

## Suggested Fix
Preserve review state when navigating back from the review section by restoring:
- Previous scroll position
- Applied review filters
- Last viewed review state

## Additional Notes
This appears to be a usability and navigation issue rather than the  application crash or functional failure. The issue was observed consistently during manual testing with occasional successful returns to the previous review state. 