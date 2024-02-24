# Short description of the project

LyricsVault aims to address the common challenges of identifying songs heard in noisy environments or sang by cover singers. It utilizes the Genius API to search for songs based on input lyrics, solving the issue of not being able to use sound recognition apps like Shazam to identify the song of interest. Displaying the top 8 choices, LyricsVault surpasses Google's lyric search which only shows the most popular song at first glance and might not be what users are looking for. Additionally, integration with the Spotify API enables users to listen to song snippets on their Spotify application at a click of a button. Last but not least, a save/delete button allows users to bookmark/unbookmark songs of interest for future reference, enhancing usability of LyricsVault.

# Website Link

https://lyricsvault-758ed.web.app/

# How to clone and run it

git clone git@github.com:Chuacx13/LyricsVault.git  
cd LyricsVault  
npm install  
Note: Fill up .env.example file and remove ".example"  
npm run dev

# Tech Stack

React  
Firebase (Authentication, Firestore)  
Tailwind CSS  
HTML  
Javascript  
Spotify API  
Genius API

# Development Process

- Did a requirement analysis to figure out what features would be essential to make this project helpful
- Features identified are:
  1. Authentication
  2. Save/Delete Songs
  3. Search for Songs via Genius API
  4. Integration with Spotify API
- Used git for version control
- Used material UI for some of the icons needed
- Integrated two APIs, namely Spotify (Spotify Integration) and Genius (Lyrics Search)
- Created REST APIs to check isSongSaved, deleteSavedSong, postSong, getAllSavedSongs
- Deployed application using Firebase hosting

# Challenges

- Integrating various music APIs into LyricsVault
  - Analysed the sample output for each API call to understand the request and response format
- This project was my first experience using Tailwind CSS
  - Extensively used the Tailwind CSS documentation and leverage on my previous knowledge in traditional CSS to help with the learning curve of Tailwind CSS

# Lessons

- Understood the importance of creating easy to understand and structured documentation
- Learnt the importance of understanding external documentation and the nuances of working with different response formats
- Improved on my skills in asynchronous programming
- Enhanced my knowledge in Tailwind CSS which has sped up my development process

# WishList

- Add youtube links as well (via YouTube API) so that non-Spotify users can find their song on youtube instead
- Test out other Spotify APIs. This is as the current Spotify API does not accurately match the songs with Genius API. However, the current Spotify API do bring users to the right song on Spotify, albeit not by the original singer.

# Links to APIs used

https://rapidapi.com/Glavier/api/genius-song-lyrics1  
https://rapidapi.com/Glavier/api/spotify23
