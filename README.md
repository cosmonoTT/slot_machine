# Slot Machine

For my first project I decided to tackle making a browser based slot machine game. My goal for this project was to have a clean yet colorful take on a modern slot machine game, with simple animations and sounds to add to the user experience.

## Images
![screenshot1](https://private-user-images.githubusercontent.com/162614484/330227306-dd64853a-44e4-456e-8df4-fb9ae4b82168.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2NDIxNjMsIm5iZiI6MTcxNTY0MTg2MywicGF0aCI6Ii8xNjI2MTQ0ODQvMzMwMjI3MzA2LWRkNjQ4NTNhLTQ0ZTQtNDU2ZS04ZGY0LWZiOWFlNGI4MjE2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxM1QyMzExMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMzg4NDJiNzIxOGVkNmY1ZTJlMmI4NzA2YWFmZDBiZWQ4NGU3OGM5NjA5MGQyNjkxMjhjNGY5OTMwYjdjZjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.kZd8-uhzzkppPLVrYG1ZvIUd1N-SSVxFeMGyZfdSzZo)
![screenshot2](https://private-user-images.githubusercontent.com/162614484/330227003-908af3e2-b98e-4e9e-8c8b-7a9850728604.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2NDIxNjMsIm5iZiI6MTcxNTY0MTg2MywicGF0aCI6Ii8xNjI2MTQ0ODQvMzMwMjI3MDAzLTkwOGFmM2UyLWI5OGUtNGU5ZS04YzhiLTdhOTg1MDcyODYwNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxM1QyMzExMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mODhlYmYzYzZhMDQ1ZDdkYTQ5MWZiMGU2M2M0MmRiYWE0NTY2YTFmZGFhYzMxNGE0MzgzZDRlOGQxMDEyNjE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.M36eGZnIEfphWhKTBzYrd9jR69xb7EdkNCVFdWyKiXw)
![screenshot3](https://private-user-images.githubusercontent.com/162614484/330226996-bc21a8f6-9ccb-49ff-b256-561875d1d014.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2NDIxNjMsIm5iZiI6MTcxNTY0MTg2MywicGF0aCI6Ii8xNjI2MTQ0ODQvMzMwMjI2OTk2LWJjMjFhOGY2LTljY2ItNDlmZi1iMjU2LTU2MTg3NWQxZDAxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxM1QyMzExMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZjRjZjgzMDQwYTYyNWZiOWU0YmMzNzNjYzI1NmE5ZTZhMGQwZmExZDc5NTkxNWJiNDZhNDA3NTg2NDNiZmEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oKUQXJW5DDcAzKLZEc8eP7-8Plk4TyRAANmrW8D1In8)
![creenshot4](https://private-user-images.githubusercontent.com/162614484/330227007-c2fe6ecf-fc3a-4407-838d-fb0d7d99bf20.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2NDI0OTcsIm5iZiI6MTcxNTY0MjE5NywicGF0aCI6Ii8xNjI2MTQ0ODQvMzMwMjI3MDA3LWMyZmU2ZWNmLWZjM2EtNDQwNy04MzhkLWZiMGQ3ZDk5YmYyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxM1QyMzE2MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYzY3NjU1NjM5YjU0YjlkNWQyNmQ3OWM4MjBmYzRiYzk4ZDgxNWIzMGUzZTk5ZDJhZjYzY2VmMTYyMGUyOGVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Qu-fwQ-AeswE0b4HjxbbEBGDyrR5J_twqjiota8RyFA)

## Technologies used
My game utilizes CSS, Javascript, and HTML.
- CSS and HTML:
    - My use of CSS and HTML for this project is somewhat minimal, as a majority of my focus for this project is Javascript.
- Javascript:
    - My game is almost entirely comprised of Javascript, I was able to use Javascript to hold my images as variables, and I was able to control the display settings of HTML elements using conditional statements.
    - The animations were created for my game entirely using JQuery to manipulate DOM elements.

## Getting Started
Users begin my game with 50 points and with a wager of 1 point. I recommend playing with sound on.

[Play the game](https://cosmonott.github.io/slot_machine/)

## Next Steps
One of the only features that I wasn't able to implement was a more advanced animation for everytime the slot machine is played. I would have preferred a more dynamic animation, but it ended up being a bit of a lofty goal due to my current expertise surrounding CSS animations.
