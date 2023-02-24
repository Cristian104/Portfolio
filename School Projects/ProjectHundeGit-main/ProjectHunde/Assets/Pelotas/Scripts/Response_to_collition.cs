using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Response_to_collition : MonoBehaviour
{

    private void OnTriggerEnter2D(Collider2D collision)
    {

        int currentSceneIndex = SceneManager.GetActiveScene().buildIndex;

        SceneManager.LoadScene("Game Over");

    }

}
