# Skeleton Loader
Skeleton loader is a temporary effect that will allocate some spaces until the required content is loaded completely. It's like a loading screen setup.

## Working
* When someone loads the page, the user profile data will be fetched after 2 seconds (as we used setTimeout here, but in reality it will be loaded after the data is fetched from the api)
* Until loading task is going on, it will make a temporary space. The original data will be displayed, once the fetching completes.
