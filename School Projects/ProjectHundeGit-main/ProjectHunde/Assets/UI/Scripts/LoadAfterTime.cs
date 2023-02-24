using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadAfterTime : MonoBehaviour
{

    [SerializeField] private float DelayBeforeLoading = 10f;
    [SerializeField] private int SceneNameToLoad;

    private float TimeElapsed;

    private void Update()
    {
        
        TimeElapsed += Time.deltaTime;

        if (TimeElapsed > DelayBeforeLoading)
        {
            SceneManager.LoadScene(SceneNameToLoad);
        }
    }


}
