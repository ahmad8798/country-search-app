# Country Search App

A challenge from Frontend Mentor using the REST Countries API. This project allows users to search for countries, filter by region, and toggle between dark and light modes.

## Table of Contents

- [Project Overview](#project-overview)

- [Setup](#setup)

- [Components](#components)

  - [CountryCard](#countrycard)

  - [CardList](#cardlist)

  - [Header](#header)

  - [RegionsDropDownButton](#regionsdropdownbutton)

  - [SearchBar](#searchbar)

  - [SearchFilterBar](#searchfilterbar)

  - [SkeletonCard](#skeletoncard)

  - [SkeletonCardList](#skeletoncardlist)

- [Pages](#pages)

  - [Home](#home)

- [Custom Hooks](#custom-hooks)

  - [useFetch](#usefetch)

  - [useFilteredCountries](#usefilteredcountries)

- [Helper Functions](#helper-functions)

  - [extractRegions](#extractregions)

- [Context](#context)

  - [CountryContext](#countrycontext)

  - [ThemeContext](#themecontext)

## Project Overview

This project is a country search application that provides functionalities to search for specific countries, filter countries by region, and toggle between dark and light modes. The project utilizes React, Bootstrap, and React Bootstrap for styling and component management.

## Setup

1.  **Clone the repository:**

```bash

git clone <repository-url>

cd <project-directory>

```

2.  **Install dependencies:**

```bash

npm install

```

3.  **Start the development server:**

```bash

npm run dev

```

This will start the Vite development server, and you can view the application at `http://localhost:5173`.

## Components

### CountryCard

Displays information about a single country, including its flag, name, population, region, and capital.

**Props:**

- `country` (object): The country data to display. This object should have the following properties:

- `name` (object): Contains a `common` property with the country's name.

- `region` (string): The region to which the country belongs.

- `population` (number): The population of the country.

- `capital` (array): An array containing the capital city of the country.

- `flags` (object): Contains a `png` property with the URL of the country's flag image.

**Usage:**

```jsx
<CountryCard
  country={{
    name: { common: "Germany" },

    region: "Europe",

    population: 83783942,

    capital: ["Berlin"],

    flags: { png: "https://flagcdn.com/w320/de.png" },
  }}
/>
```

**Description:**

- The `CountryCard` component takes a `country` object and displays its flag, name, population, region, and capital in a styled card format.

- The `isDarkModeEnabled` prop adjusts the card’s styling to match the current theme (dark or light).

### CardList

A container component that wraps a list of country cards in a responsive grid.

**Props:**

- `children` (ReactNode): The country cards to be displayed.

**Usage:**

```jsx
<CardList>
  {countries.map((country) => (
    <CountryCard key={country.cca3} country={country} />
  ))}
</CardList>
```

**Description:**

- The `CardList` component arranges its children (typically `CountryCard` components) in a responsive grid using Bootstrap's `Container` and `Row` components.

### Header

Displays the application title and includes a toggle button for dark mode.

**Usage:**

```jsx
<Header isDarkModeEnabled={isDarkModeEnabled} toggleDarkMode={toggleDarkMode} />
```

**Description:**

- The `Header` component displays the title of the application and a button to toggle dark mode on or off.

### RegionsDropDownButton

A dropdown button for selecting regions to filter countries.

**Props:**

- `regions` (array): List of regions to display in the dropdown.

- `handleRegionChange` (function): Function to handle region selection.

- `selectedRegion` (string): The currently selected region.

**Usage:**

```jsx
<RegionsDropDownButton
  regions={["Europe", "Asia", "Africa"]}
  handleRegionChange={handleRegionChange}
  selectedRegion={selectedRegion}
/>
```

**Description:**

- The `RegionsDropDownButton` component provides a dropdown menu for selecting a region.

- It updates the selected region via the `handleRegionChange` function and adjusts its styling based on the `isDarkModeEnabled` prop.

### SearchBar

A search bar for filtering countries by name.

**Props:**

- `handleSearchChange` (function): Function to handle search input changes.

**Usage:**

```jsx
<SearchBar handleSearchChange={handleSearchChange} />
```

**Description:**

- The `SearchBar` component allows users to enter a search term to filter the list of countries.

- The `handleSearchChange` function updates the search term.

### SearchFilterBar

A container for the search bar and region filter dropdown, arranged in a flexible layout.

**Props:**

- `children` (ReactNode): The search bar and dropdown components.

- `className` (string): Additional CSS classes to apply.

**Usage:**

```jsx
<SearchFilterBar className="mt-5">
  <SearchBar handleSearchChange={handleSearchChange} />

  <RegionsDropDownButton
    regions={regions}
    handleRegionChange={handleRegionChange}
    selectedRegion={selectedRegion}
  />
</SearchFilterBar>
```

**Description:**

- The `SearchFilterBar` component arranges its children (search bar and dropdown) in a responsive and flexible layout using Bootstrap's `Container` and `d-flex` classes.

### SkeletonCard

A loading skeleton Card component that provides a placeholder while data is being fetched.

**Usage:**

```jsx
<SkeletonCard />
```

**Description:**

- The `SkeletonCard` component displays a placeholder card that mimics the layout of `CountryCard` components.

- It is used to maintain layout consistency while the actual country data is being fetched.

### SkeletonCardList

A utility component that renders a list of skeleton placeholders while the actual data is being fetched.

**Props:**

- `count` (number): The number of skeleton cards to render.

**Usage:**

```jsx
<SkeletonCardList count={8} />
```

**Description:**

- The `SkeletonCardList` component is designed to display a specified number of skeleton placeholders by using the `SkeletonCard` component. It arranges these placeholders in a responsive grid layout, just like the `CardList` component.

- This component is particularly useful for maintaining layout consistency during data loading, providing a smooth user experience.

## Pages

### Home

The main page of the application that fetches country data, manages dark mode, and provides search and filter functionality.

**Usage:**

```jsx
<Home />
```

**Description:**

- The `Home` page is responsible for fetching data from the REST Countries API, managing dark mode, and filtering countries based on search input and selected region.

- It uses the `useFetch` hook to retrieve data and the `useFilteredCountries` hook to apply filters.

- While data is loading, the `SkeletonCardList` component is displayed to provide a visual placeholder.

## Custom Hooks

### useFetch

Fetches data from a specified URL and manages loading and error states.

**Parameters:**

- `url` (string): The URL to fetch data from.

**Returns:**

- `data` (any): The fetched data.

- `loading` (boolean): Indicates if data is still being loaded.

- `error` (string | null): Error message if an error occurred.

**Usage:**

```jsx
const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all");
```

**Description:**

- The `useFetch` hook handles the fetching of data from the given URL and manages the loading and error states.

### useFilteredCountries

Filters a list of countries based on the selected region and search term.

**Parameters:**

- `countries` (array): The list of countries.

- `selectedRegion` (string): The selected region to filter by.

- `searchTerm` (string): The search term to filter by country name.

**Returns:**

- `array`: A filtered list of countries.

**Usage:**

```jsx
const filteredCountries = useFilteredCountries(
  countries,
  selectedRegion,
  searchTerm
);
```

**Description:**

- The

`useFilteredCountries` hook takes a list of countries and filters it based on the selected region and search term.

## Helper Functions

### extractRegions

Extracts unique regions from a list of countries.

**Parameters:**

- `countries` (array): The list of countries.

**Returns:**

- `array`: A list of unique regions.

**Usage:**

```jsx
const regions = extractRegions(countries);
```

**Description:**

- The `extractRegions` function helps to generate a list of unique regions from the countries data, which can then be used in the `RegionsDropDownButton`.

## Context

### CountryContext

Provides the current list of countries and a function to update it.

**Usage:**

```jsx
const { countries, setCountries } = useContext(CountryContext);
```

**Description:**

- `CountryContext` allows components to access and update the list of countries across the application.

### ThemeContext

Manages the current theme (dark or light mode) and provides a function to toggle the theme.

**Usage:**

```jsx
const { isDarkModeEnabled, toggleDarkMode } = useContext(ThemeContext);
```

**Description:**

- `ThemeContext` provides the current theme state and a function to toggle between dark and light modes. It allows components to adjust their appearance based on the selected theme.
