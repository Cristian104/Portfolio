from google.cloud import texttospeech
from google.auth.credentials import Credentials
import os


# Set the API key (replace YOUR_API_KEY with your actual API key)
api_key = "AIzaSyCV-E_ldSETHxmbTBmsfQHcqdRyaTg2FYE"


# Create a credentials object from the API key
credentials = Credentials.from_authorized_user_info(info={}, scopes=[])
credentials.token = api_key

# Create a client object with the credentials
client = texttospeech.TextToSpeechClient(credentials=credentials)

# The rest of your code goes here


# Instantiates a client
client = texttospeech.TextToSpeechClient()

# The text to synthesize
input_text = "Hello, world!"

# Set the text input to be synthesized
synthesis_input = texttospeech.SynthesisInput(text=input_text)

# Build the voice request, select the language code ("en-US") and the SSML
# voice gender ("NEUTRAL")
voice = texttospeech.VoiceSelectionParams(
    language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
)

# Select the type of audio file you want returned
audio_config = texttospeech.AudioConfig(
    audio_encoding=texttospeech.AudioEncoding.MP3
)

# Perform the text-to-speech request on the text input with the selected
# voice parameters and audio file type
response = client.synthesize_speech(
    input=synthesis_input, voice=voice, audio_config=audio_config
)

# The response's audio_content is binary.
with open("output.mp3", "wb") as out:
    out.write(response.audio_content)
    print('Audio content written to file "output.mp3"')
    os.system("start output.mp3") # opens the file in the default audio player
