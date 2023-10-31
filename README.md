# itcrowd-newsapp


# React Native News App

## Overview

Welcome to the React Native News App! This real-time news application provides users with top news, all news, and the ability to search by category using the [NewsAPI](https://newsapi.org/). The app is developed in JavaScript, utilizing React Redux for favorite news management and implementing basic authentication to enable users to save their favorite news. Smooth transitions within components enhance the user experience.

## Features

- **Top News and All News:**
  - Displays real-time top news and all news categories.

- **Category Search:**
  - Allows users to search for news articles by category, leveraging the [NewsAPI](https://newsapi.org/).

- **React Navigation:**
  - Utilizes React Navigation for seamless screen navigation.

- **React Redux for State Management:**
  - Manages favorite news using React Redux for efficient state management.

- **Authentication:**
  - Implements basic authentication, restricting access to the ability to save favorites to logged-in users only.

## Extra Features

- **Weather Widget:**
  - Integrates a widget into the main app to display current weather information based on the user's location.
  - Fetches data from the [OpenWeatherMap API](https://openweathermap.org/api).
  - Provides both current weather data and hourly forecasts for the next 5 days.

## Project Structure

```plaintext
news-app/
|-- src/
|   |-- api/
|   |   |-- newsApi.js          # Files containing API calls
|   |
|   |-- components/
|   |   |-- Auth/               # Authentication related components
|   |   |-- WeatherWidget.js    # Weather widget component
|   |   |-- ...                 # Other reusable components
|   |
|   |-- context/
|   |   |-- AuthContext.js      # Authentication context
|   |
|   |-- features/
|   |   |-- FavoritesSlice.js   # Redux slice for managing favorite news
|   |
|   |-- hook/
|   |   |-- useAuth.js          # Custom hook for handling authentication
|   |
|   |-- Navigation/
|   |   |-- AppNavigator.js     # Main application navigator
|   |   |-- ...                 # Other navigation files
|   |
|   |-- screens/
|   |   |-- TopNewsScreen.js    # Screen component for top news
|   |   |-- AllNewsScreen.js    # Screen component for all news
|   |   |-- ...                 # Other screen components
|   |
|   |-- utils/
|       |-- constants.js        # Constants and helper functions
|       |-- helpers.js          # General helper functions
|       |-- userData.js         # User data for authentication
```

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/news-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd news-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Configuration

1. **Go to utils/constants.js file in the root of the project.**

2. **Obtain API keys:**
   - Get a NewsAPI key from [NewsAPI](https://newsapi.org/).
   - Get an OpenWeatherMap API key from [OpenWeatherMap](https://openweathermap.org/).

3. **Add the following entries to your constants.js file:**

    ```env
    NEWS_API_KEY=your_newsapi_key
    WEATHER_API_KEY=your_openweathermap_key
    ```

### Running the App

- **Start the development server:**

    ```bash
    npm start
    ```

- **Open the Expo client:**
  - On your device, install the Expo Go app from the [App Store](https://apps.apple.com/app/apple-store/id982107779) (iOS) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android).
  - Scan the QR code generated by the Expo CLI using the Expo Go app.

## Available Scripts

- `npm start`: Start the development server.
- `npm run android`: Run the app on an Android emulator/device.
- `npm run ios`: Run the app on an iOS emulator/device.
- `npm run web`: Run the app in a web browser.


## Acknowledgments

- Thanks to the open-source community for creating and maintaining the wonderful libraries used in this project.
- Special thanks to NewsAPI and OpenWeatherMap for providing valuable services.

Happy reading and exploring the news! 📰☀️
