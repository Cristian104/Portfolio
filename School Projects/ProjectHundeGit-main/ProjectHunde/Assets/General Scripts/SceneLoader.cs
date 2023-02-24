using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEditor;

public class SceneLoader : MonoBehaviour
{
    public Animator Transition;
    [SerializeField] public float TransitionTime = 1f;



    public void LoadNextScene()
    {
        int CurrentSceneIndex = SceneManager.GetActiveScene().buildIndex;
        SceneManager.LoadScene(CurrentSceneIndex + 1);


    }

    public void LoadStartScene()
    {
        SceneManager.LoadScene(0);

    }

    //This one is for choosing the UI but to not repeat music
    public void LoadStartSceneNoMusic()
    {

        StartCoroutine(LoadLevelIntroScene(SceneManager.GetActiveScene().buildIndex + 1));


    }

    IEnumerator LoadLevelIntroScene(int IntroScene)
    {
        //Play Animation
        Transition.SetTrigger("Start");

        //Wait
        yield return new WaitForSeconds(TransitionTime);

        //Load Scene
        SceneManager.LoadScene(IntroScene);

    }










    public void SteveScene()
    {
        SceneManager.LoadScene(3);
    }

    public void AlienVersion()
    {
        SceneManager.LoadScene(1);
    }

    public void AppQuit()
    {
        Application.Quit();
    }

    public void LoadNextLvl()
    {
        StartCoroutine (LoadLevel(SceneManager.GetActiveScene().buildIndex + 1));
    }

    IEnumerator LoadLevel(int LevelIndex)
    {
        //Play Animation
        Transition.SetTrigger("Start");

        //Wait
        yield return new WaitForSeconds(TransitionTime);

        //Load Scene
        SceneManager.LoadScene(LevelIndex);

    }



}
