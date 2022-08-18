import React from 'react'

function article() {
    return (
        <div>
            <section class="colored-section" id="articles">

                <div id="article-carousel" class="carousel slide" data-ride="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active container-fluid-article article_carousel">
                            <h2 class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at arcu egestas, sagittis massa non, scelerisque lorem. Nulla id sodales.</h2>
                            <img class="article-image" src="/img/article_dogs/1d.jpg" alt="lady-profile"></img>
                            <em>Ansh Chauhan</em>
                        </div>
                        <div class="carousel-item container-fluid-article article_carousel">
                            <h2 class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at arcu egestas, sagittis massa non, scelerisque lorem. Nulla id sodales.</h2>
                            <img class="article-image" src="/img/article_dogs/2d.jpg" alt="lady-profile"></img>
                            <em>Saksham Gupta</em>
                        </div>
                        <div class="carousel-item container-fluid-article article_carousel">
                            <h2 class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at arcu egestas, sagittis massa non, scelerisque lorem. Nulla id sodales.</h2>
                            <img class="article-image" src="/img/article_dogs/3d.jpg" alt="lady-profile"></img>
                            <em>Subhranshu Majhi</em>
                        </div>
                        <div class="carousel-item container-fluid-article article_carousel">
                            <h2 class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at arcu egestas, sagittis massa non, scelerisque lorem. Nulla id sodales.</h2>
                            <img class="article-image" src="/img/article_dogs/4d.jpg" alt="lady-profile"></img>
                            <em>Anant Dubey</em>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#article-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#article-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>

            </section>
        </div>
    )
}

export default article