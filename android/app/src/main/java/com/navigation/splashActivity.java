package com.navigation;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;

public class splashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        pauseScreen();
    }

    private void pauseScreen() {
        new Handler().postDelayed(new Runnable()
        {
            @Override
            public void run() {

                startActivity(new Intent(splashActivity.this,MainActivity.class));
                finish();

            }
        },3000);
    }
}


