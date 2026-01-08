# Features

## 1. Product-Listing

### Purpose
Show all porducts to user.

### Data Source
API

### Logic Flow
API will call on component mount.
loading state `true`.
data comes from API and set to the product state.
loading state `false`.

### Edge Case
API Slow = Loader Show.
API Fail = Error Show.
