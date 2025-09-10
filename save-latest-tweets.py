import os
import json
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
env_path = "/var/www/fastoneglobalmarkets.com/twitter-news-script/.env"
load_dotenv(env_path)

# Access environment variables
twitter_bearer_token = os.getenv("TWITTER_BEARER_TOKEN")
user_ids = ["381696140", "108617488"]  # Add your Twitter user IDs here
output_file = "/var/www/fastoneglobalmarkets.com/htdocs/latest-tweets.json"  # Local file to save tweets
output_file_2 = "/var/www/fastoneglobalmarkets.co/htdocs/latest-tweets.json"  # Additional file to save tweets

# Function to fetch latest tweets from a user timeline
def fetch_tweets(user_id):
    try:
        url = f"https://api.twitter.com/2/users/{user_id}/tweets"
        headers = {
            "Authorization": f"Bearer {twitter_bearer_token}"
        }
        params = {
            "max_results": 18,
            "tweet.fields": "created_at"
        }
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # Check if the request was successful
        tweets = response.json().get("data", [])
        # Add user_id to each tweet
        return [{"id": tweet["id"], "text": tweet["text"], "created_at": tweet["created_at"], "user_id": user_id} for tweet in tweets]
    except Exception as e:
        print(f"Error fetching tweets for user {user_id}: {e}")
        return []

# Function to write tweets to a file
def write_to_file(tweets, file_path):
    try:
        with open(file_path, "w") as f:
            json.dump(tweets, f, indent=2)
        print(f"Tweets saved to {file_path}")
    except Exception as e:
        print(f"Error saving tweets to file {file_path}: {e}")

# Fetch and save tweets to both files
def save_tweets_to_file():
    all_tweets = []
    for user_id in user_ids:
        all_tweets += fetch_tweets(user_id)
    
    # Write the tweets to both local files
    if all_tweets:
        write_to_file(all_tweets, output_file)
        write_to_file(all_tweets, output_file_2)
    else:
        print("No tweets found.")

if __name__ == "__main__":
    save_tweets_to_file()
