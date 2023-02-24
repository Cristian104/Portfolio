using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        
    }


    // Update is called once per frame
    void Update()
    {
        
        float x_pos = ((Input.mousePosition.x / Screen.width) * 16);
        transform.position = (new Vector2(Mathf.Clamp(x_pos-8,-6.7f,6.7f),-5));

    }
}
