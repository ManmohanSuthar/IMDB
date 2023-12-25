import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
        <>
              <div id="oopss">
                 <div id="error-text">
                 <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                        <span>404 PAGE</span>
                        <p class="p-a">
           .            The page you were looking for could not be found</p>
                        <p class="p-b">
                            ... Back to previous page
                        </p>
                        <a href='#' class="back">... Back to previous page</a>              
                 </div>
              </div>
        </>
  )
}

export default ErrorPage