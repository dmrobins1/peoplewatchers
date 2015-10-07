heroku db was created based on info in:

Connected

- Using psql to remote data base.
   - Installed psql locally
   - Added path to psql:
      - export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin
   - Connect psql to heroku postgres
      - heroku pg:psql PEOPLE_WATCH_DB

- Initializing t_media in DB
    - paste dropMediaTable contents into remote psql window
    - paste createMediaTable contents into remote psql window
    - paste insertFirstRows contents into remote psql window

- Get heroku postgres info
   - heroku pg:info PEOPLE_WATCH_DB

- Get connection string to remote postgres
   - heroku pg:credentials PEOPLE_WATCH_DB
