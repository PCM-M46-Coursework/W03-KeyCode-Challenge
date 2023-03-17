/**
 * A timer that excutes a callback function when the time reaches zero.
 * Can be started, stopped, and reset.
 */
export class CountdownTimer
{   
    /** @type {Function} */
    #_callback;

    /** @type {Number} */
    #_initialTTL;

    /** @type {Number} */
    #_currentTTL;

    /** @type {Boolean} */
    #_pauseState = true;

    /**
     * Initialises a new instance of the {@link CountdownTimer} class.
     * 
     * @param {Function} fn - The callback function to execute, when the timer reaches zero.
     * @param {Number} ttl - The time to live, in seconds, until the callback function is executed.
     * @param {Boolean} autoStart - Determines whether or not to start the timer immediately.
     */
    constructor(fn, ttl, autoStart = false)
    {
        this.#_callback = fn;
        this.#_initialTTL = ttl;
        this.#_currentTTL = ttl;

        if (autoStart) this.Start();
    }

    /**
     * Start the timer.
     */
    start()
    {
        this.#_pauseState = false;
        this.#_onTick();
    }

    /**
     * Stop the timer. Does not reset the time.
     */
    stop()
    {
        this.#_pauseState = true;
    }

    /**
     * Reset the timer to the intial TTL.
     */
    reset()
    {
        this.#_currentTTL = this.#_initialTTL;
    }

    /**
     * Called recursively, when the timer is started.
     */
    #_onTick()
    {
        if (this.#_pauseState) return;
        if (--this.#_currentTTL === 0) {
            this.#_onElapsed();
            return;
        }
        setTimeout(() => this.#_onTick(), 1000);
    }

    /**
     * Called when the timer reaches zero.
     */
    #_onElapsed()
    {
        this.stop();
        this.#_callback();
        this.reset();
    }
}