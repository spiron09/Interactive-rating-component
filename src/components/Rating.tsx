import React, { useState } from 'react';
import styles from './Rating.module.css';
import { thankyou } from './thankyou';
export function Rating() {
    const [selectedRating, setselectedRating] = useState<number>();
    const [isSubmitted, setisSubmitted] = useState(false);
    function handleForm(e: React.FormEvent) {
        e.preventDefault();
        setisSubmitted(true);
    }
    function handleRatingClick(rating: number) {
        setselectedRating(rating);
    }
    return (
        isSubmitted ?

            <div className={styles.thankPanel}>
                <img className={styles.thank} src="/illustration-thank-you.svg" />
                <div className={styles.thankContent}>
                    <div>You selected {selectedRating} out of 5</div>
                    <h1>Thank You!</h1>
                    <p>
                        We appreciate you taking the time to give a rating.
                        If you ever need more support, don't hesitate to
                        get in touch!</p>
                </div>
            </div>


            :
            <form onSubmit={handleForm} className={styles.panel}>
                <div className={styles.star}>
                    <img src='/icon-star.svg'></img>
                </div>

                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us
                    improve our offering!
                </p>

                <div className={styles.buttongroup}>
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            type='button'
                            onClick={() => handleRatingClick(rating)} className={styles.rating}>{rating}</button>
                    ))}

                </div>
                <button disabled={selectedRating === undefined} className={styles.submit}>SUBMIT</button>
            </form>

    );
}