using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

public class SetVolume : MonoBehaviour
{

    
    public AudioMixer AudioMixer;

    public void SetLevel(float SliderValue)
    {
        AudioMixer.SetFloat("MusicVol", Mathf.Log10(SliderValue) * 20);
    }


}
