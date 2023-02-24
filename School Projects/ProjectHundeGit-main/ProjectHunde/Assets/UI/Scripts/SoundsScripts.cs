using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundsScripts : MonoBehaviour
{
    public AudioSource MyFX;
    public AudioClip ForSwap;
    public AudioClip ForEnter;
    

    public void PlaySwap()
    {
        MyFX.PlayOneShot(ForSwap);
    }

    public void PlayEnter()
    {
        MyFX.PlayOneShot(ForEnter);
    }

    
}
