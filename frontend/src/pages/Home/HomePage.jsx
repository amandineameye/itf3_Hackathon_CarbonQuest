import homeImage from "../../assets/home.png";

const HomePage = () => {
	return (
		<>
			<main className="flex flex-1 py-4">
				<div className="container flex flex-col xl:flex-row gap-4">
					<div className="flex flex-col  w-full xl:w-1/2 bg-[#f5f8f6] rounded-lg justify-center py-10 px-10">
						<h2>Carbon Quest, quésaco ?</h2>
						<div>
							<p className="pb-4">
								Carbon Quest est un jeu éducatif de plates-formes qui vous
								invite à explorer les enjeux du Green IT. Le Green IT désigne
								l’ensemble des pratiques visant à réduire l’impact
								environnemental des technologies numériques, de leur conception
								à leur utilisation.
							</p>
							<p className="pb-4">
								Dans ce jeu, vous incarnez un avatar qui grimpe dans une forêt,
								répondant à des questions sur ces pratiques écologiques. À la
								fin de l'ascension, vous découvrirez un ciel reflétant votre
								succès : sera-t-il radieux ou couvert de pollution numérique ?
							</p>
							<h3>But du jeu</h3>
							<p className="pb-4">
								Votre mission est de grimper jusqu’au sommet de la canopée avant
								la fin du temps imparti, tout en répondant correctement à un
								maximum de questions. Votre score final influence l’état du
								ciel, que vous ne découvrirez qu’une fois arrivés en haut. Un
								ciel dégagé est le signe de bonnes réponses, tandis qu’un ciel
								sombre reflète des erreurs accumulées.
							</p>

							<h3>Comment jouer ?</h3>
							<ul className="pb-4">
								<li>
									Dans Carbon Quest, utilisez les touches directionnelles pour
									déplacer votre avatar vers le haut de la forêt.
								</li>
								<li>
									À chaque palier, un esprit de la forêt vous posera une
									question sur le Green IT.
								</li>
								<li>
									Une mauvaise réponse ne vous empêche pas de continuer à
									monter, mais elle affectera le résultat final.
								</li>
								<li>
									Une fois au sommet, vous pourrez consulter vos réponses, voir
									vos erreurs, et en apprendre davantage sur le Green IT.
								</li>
							</ul>
							<button className="flex text-md font-semibold bg-title hover:bg-text-light transition-200 rounded-lg text-white px-5 py-2 transition-200 mx-auto mt-8">
								Jouer
							</button>
						</div>
					</div>
					<div className="flex flex-col w-full xl:w-1/2">
						<img src={homeImage} alt="" />
					</div>
				</div>
			</main>
		</>
	);
};

export default HomePage;
