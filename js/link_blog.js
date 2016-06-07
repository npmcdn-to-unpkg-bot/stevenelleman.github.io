/* Blog and Project */
/* ["photo_address", "title", "date", "type"] */

/*
function loadBlog(index, element){
	console.log("loadblog")
	var link_address = $(element)[0];
	var link_name = $(element)[1];
	var link_date = $(element)[2];
	var final_address = "http://www.stevenelleman.com/pw2-images/images/image_links/blog/"+link_address+".jpg";
	var container = $("<div/>").addClass("banner_container");
	var banner_container = $("<div/>").addClass("blog_banner");
	banner_container.css("background-image", "url("+final_address+")");
	banner_container.attr("id", link_address);
	var name = $("<div/>").addClass("blog_name").text(link_name);
	var date = $("<div/>").addClass("blog_date").text(link_date);
	var arrow_down = $("<div/>").addClass("blog_arrow_down").attr("id", "#blog_arrow_down");
	var arrow_up = $("<div/>").addClass("blog_arrow_up").attr("id", "#blog_arrow_up");
	var arrow_img = $("<img/>").attr("src", "http://www.stevenelleman.com/pw2-images/images/icons/arrows/arrow.png");

	var contents = $("<div/>").text(link_contents).addClass(".blog_contents");
	contents.css("display", "none");
	
	banner_container.append(name);
	banner_container.append(date);
	arrow_down.append(arrow_img);
	arrow_up.append(arrow_img);
	banner_container.append(arrow_down);
	banner_container.append(arrow_up);
	container.append(banner_container);
	container.append(arrow_up);
	$(".links").append(container);
}*/


/*$(document).ready(function(){
		$(".blog_header").click(function(){
			var container = $(this).closest(".blog_container");
			var footer = $(this).closest(".blog_footer");
			if (container.hasClass("blog_collapsed")) {
				container.removeClass("blog_collapsed");
				footer.removeClass("blog_collapsed");
			} else {
				container.addClass("blog_collapsed");
				footer.addClass("blog_collapsed");
			}
		});
		 
		$(".blog_footer").click(function(){
		    $(this).closest(".blog_container").addClass("blog_collapsed");
		    $(this).addClass("blog_collapsed");
	  	});
});*/



/* Link Click 

$(document).ready(function(){
	$(".blog_banner").click(function(){
		var contents = $(this).children(".blog_contents");
		var arrow_up = $(this).children(".blog_arrow_down");
		var arrow_down = $(this).children(".blog_arrow_up");
		contents.css("display", "block");
		arrow_up.css("display", "block");
		arrow_down.css("display", "none");
	})*/


/* Link Close */
/*
	$(".blog_arrow_up").click(function(){
		var contents = $(this).parent(".blog_contents");
		var arrow_up = $(this);
		var arrow_down = contents.children(".blog_arrow_up");
		contents.css("display", "none");
		arrow_up.css("display", "none");
		arrow_down.css("display", "block");
	})
})*/


/* Blog Link Resize */
/*$(window).on('resize', function() {
	if ($(window).width()  < 600) {
		$('.blog_container').css("width", "99.5%");
	} else if ($(window).width()  < 1000) {
		$('.blog_container').css("width", "49.4%");
	} else if ($(window).width() < 1400) {
		$('.blog_container').css("width", "33%");
	} else if ($(window).width() < 1800) {
		$('.blog_container').css("width", "24.4%");
	} else {
		$('.blog_container').css("width", "19.5%");
	}
});

$(document).ready(function() {
	if ($(window).width()  < 600) {
		$('.blog_container').css("width", "99.5%");
	} else if ($(window).width()  < 1000) {
		$('.blog_container').css("width", "49.4%");
	} else if ($(window).width() < 1400) {
		$('.blog_container').css("width", "32.4%");
	} else if ($(window).width() < 1800) {
		$('.blog_container').css("width", "24.4%");
	} else {
		$('.blog_container').css("width", "19.5%");
	}
});*/





var blog_links = [
	["blog_mun", "The Dark Net", "Spring 2016", ""], 
	["blog_isis", "ISIS is Islamic, But That's Not the Point", "17-11-2015", `In the wake of the tragedy in Paris I have seen numerous posts expressing how the extremists who perpetrated these killings went against the teachings of Islam and were not true Muslims. In the wake of the hateful things that the Westboro Baptist Church does, American Christians make it absolutely clear how the Westboro practitioners are not real Christians. By definition Islamic means that the Quran is the emphasized sacred text. ISIS and Islamic extremists use the Quran. Christianity means that the Bible is the emphasized sacred text and the Westboro Baptist Church emphasizes the Bible. ISIS is Islamic, and the Westboro Baptist Church is Christian. Is this to say ISIS REPRESENTS Islam? Of course not - there are 1.3 billion Muslims in the world, and ISIS represents an extremely small fraction of Muslims. Is this to say the Westboro Baptist Church REPRESENTS Christianity? Of course not - Christianity encompasses numerous sects. Both ISIS and the Westboro Baptist Church represent extreme interpretations of the Quran and Bible respectively. To say ISIS is not Islamic is factually incorrect. Rather than attempting to cordon extremist groups off and rationalize how non-Islamic or non-Christian they are, we need to recognize that religion is in large part interpretation and that there are many many interpretations - most moderate but some extreme. This is more accurate and avoids fear-mongering and stereotyping - it recognizes that a particular religion does not inherently create extremists; there are extreme interpretations WITHIN ALL IDEOLOGIES (including atheism, for that matter). In our day and age what defines extremism is imposition of values, of violently impressing ones own values onto others. Being a moderate is simply respecting others to make their own choice. On the basis of this distinction Islamophobia describes a fear that can be applied to all ideologies, not just to one in particular.`],
	["blog_shootings", "School Shootings and Masculinity Lost", "7-10-2015", `In different social settings we have different ways of presenting ourselves, often to fit into the expectations of those around us. We do this so that they like us, one of the primary ways of deriving a sense of self-worth is through the approbation of others. Here are some tips for maximizing approbation while not alienating those around us. <br><br>1. Don't make assumptions.<br><br>Making assumptions, especially about someone's ethnic or cultural origin, is one of the riskiest ways of starting off with someone. We often make this mistake because we want to impress others, but honestly the risk isn't worth it. Making a mistake is usually regarded as highly offensive and guessing correctly offers very few benefits. While asking certain questions may seem invasive or embarrassing, understanding when to give up and ask is very important when working with others. <br><br>2. Make others feel important.<br><br> We strive for the appreciation of others. This is why we all wear masks of half-truths, masks that are adapted according to what we think others expect and want of us. While we change our presentation for others, often the other person is so involved in the same process that nobody gives the appreciation that everyone desperately wants. Wearing masks is a strange mix of self-sacrificing and egocentric; we are willing to change major aspects of ourselves to feel valuable. And when the appreciation we expect doesn't come, we wear the mask more and more desperately, willing to sacrifice more and more aspects of ourselves. This cycle can become destructive, very very easily. <br><br>I prefer the opposite process, one that creates a win-win scenario. If you genuinely appreciate something that another person does, always say it. Always say nice, true things. There is no down-side. And this is exactly what others want; they just want to feel appreciated. <br><br>Recently I went to Asha's Teahouse in Berkeley and I thanked the baristo for bringing joy to people through fabulous tea. After this token of appreciation, his face completely transformed. He went from tired to happy, really really happy, in a few seconds. He immediately replied <q>You're the guy!</q> I asked him what he meant. He then told me that I had done the same thing before - I had, five months before, and he remembered it. Appreciation is powerful, because it is what people so desperately want (especially in the service industry). <br><br>While this process can be very powerful, you also have to watch out for negative expectations. A good example are gender expectations. Men are expected to pursue, women are expected to be pursued. It's stupid but it is the expectation. What this means is that there are opposite biases - guys being nice to women are suspected of ulterior motive (it's fair enough, too), and women being nice to men are seen as teases. When making someone of the opposite gender important, understanding this bias becomes quite important. Very few people actually appreciate others, so when someone does others are initially suspicious. <br><br>In other situations the bias can be used for your benefit. For instance, in environments with a hierarchy perceived inferiors are typically treated like crap by perceived superiors. Superiors who do this not only are massively insecure but are missing a chance to win major brownie points. It's my impression that these superiors don't actually feel superior so they have to beat up underlings to prove their authority - prove it to themselves. A superior who knows they are an authority does not need to treat their underlings like crap - it fundamentally doesn't help anyone. But as this is the expectation, if a perceived superior is decent to perceived inferiors, that decency is amplified by the negative expectation. I have had so many amazing conversation and experiences with cab/uber drivers, homeless folks, and service workers because I treated them like equals in a situation in which they expected to be treated like inferiors. <br><br>3. Start with commonalities, work to differences.<br><br>Human interactions can be seen in terms of energy barriers. We only meet new people if the energy barrier is lowered by what we can get from the interaction - the person may look interesting, they may be beautiful, they may have a nice smile. These all help lower the barrier. In conversations the best way of lowering the barrier is by targeting commonalities. By finding commonalities you make the other person more invested in the conversation. Another major barrier is lack of trust, when you establish commonalities and establish more credibility you can then move to away from commonalities to differences. Differences require more tact because there is potential for confrontation. So when I discuss differences I'm usually prepared to fall on my sword - I would prefer to keep a relationship intact than burn a bridge. <br><br>4. Actually listen. <br><br>Super simple but when I meet someone several times and I can remember personal minutiae the other person really appreciates it, and are often shocked. We're often so focused on projecting that we miss what the other person is projecting. If you listen the other person can feel assured and appreciated. <br><br>5. To have a friend, you have to be a friend. Relationships are an exchange. Each person requires something from the situation, if they aren't they shouldn't be in the relationship. While there is a big focus on unconditional love, it is a silly concept, because it is a relationship that could be completely arbitrary and meaningless. Often what people label as unconditional love is completely conditional, the conditions are just so obvious that they blend into the background. But by striving for this false ideal, people invest too much energy in the arbitrary and the meaningless. Moreover, unconditional love begets unconditional hatred. Emphasis on the arbitrary bleeds into other emotions and enables a lot of nastiness. By thinking about a relationship as a reciprocal exchange (but in two sets of terms) the relationship remains meaningful - trust and love is earned through meaningful actions. Distrust is also earned and is not arbitrary. Trust and love are always vulnerable. Happiness is always vulnerable. There is always something valuable to lose. Many people fear loss more than they want to gain - they choose secure unhappiness over insecure happiness. For this reason, most people won't invest in being a friend first, they are waiting for the other person to move. Once you understand happiness is always insecure and accept it, it is pretty easy to be the friend first. So many people are just waiting to be met, but they require others to take the brunt of risk and be the friend first. Just do it. It's worth it. 6. Smile. Lower the energy barrier. That's it. 7. There is no down-side of being polite. Some cultures require manners and politeness in conversation. In southeastern US, politeness is required for conversation. When southeastern folks go anywhere else in the country they are inhibited by the fact that they can only interact in such specific conditions. But if you understand this, being polite is appealing to everyone - for the folks that require it, they will immediately like you because you fit in their expectations. For the folks that don't require it, they will either be pleasantly surprised or slightly suspicious that you're sucking up. This also applies to smiling and being cheery - in Northern Europe and in the northeastern US people initially think these characteristics are fake. Once they are convinced it is real, these folks really appreciate it though. Happiness is like infectious energy, and when others people catch it, the energy is amplified. 8. Respect boundaries. Never impose your own values onto others. The values you have are a product of your experiences. Others' values are a product of their experiences. Understand that there is a fundamental barrier between your perspective and others' perspectives because of this difference in experiences. Respect this boundary. When you impose your own values on others, you are not properly respecting the fact that the other person's values may be consistent with their experiences. Being aware of this boundary allows you to discuss very sensitive topics in a very comfortable way - if it is made clear that you respect others' perspectives and their body of experiences you will have a collaborative experience rather than an adversarial one. 9. Persuasion requires valuing the other side. I think many Americans imagine persuasion as holding your adversary in a death-grip of self-righteousness until they've been throttled into seeing the truth. This interpretation is guaranteed to fail. Effective persuasion is being a necessary mirror for another person - understanding their argument to such a high degree that you can explain it and its flaws in their terms. I do not do the persuading - they persuade themselves - but I am the necessary messenger. To be the messenger requires valuing the other person's perspective over missionizing them. This is difficult, to understand someone else's perspective fully you first have to be completely open to the possibility that your views could be wrong. For this reason I invest my trust not in my specific views but in my meta-views (i.e. views about views). I value self-improvement. Self-improvement is a certain way of looking at the nature of my interpretations, that my current interpretations are flawed and that through a process of identifying failures I will improve. This meta-view enables me to be wrong: to be wrong is an opportunity to improve. Many Americans invest their sense of self-worth in a specific way of viewing an issue. Consequently they cannot take the risk to understand other interpretations - to fully understand, one must start with the humility that they could be wrong. Otherwise there will be ideological barriers that prevent them from understanding, barriers for ideological self-preservation. Being the messenger requires I understand their interpretation and their motivational structure (i.e. how they see their self-worth) so that I can present a counter-argument and a certain motivational structure for them to be motivated to be persuaded. If you present a reasonable counter-interpretation without motivation to be persuaded, they will simply reject your argument. You need to provide both. 10. Emotions beget actions. Actions can also beget emotions. People are social animals and emotions are infectious. Happiness, sadness, and anxiety can all be passed to others. A big mistake a lot of folks make is not masking the fact they are sad or anxious. A lot of the time these folks are wallowing in the cheap gratification of self-pity and want others to either commiserate or care. For the most part, they won't. They will either take advantage of you or avoid you like a leper. Both are bad. Both are highly risky and conflict with your objective. The way you solve your problem is by putting on a mask - be happy, be nice and others will be infected. And then you have a reason to be happy. Actions will beget complimentary emotions. 11. Redraw barriers When discussing very sensitive topics, redrawing barriers can reduce the chance of confrontation to zero. Confrontations occur when the one person gets defensive and thinks the other person is assaulting their views or their worth. A simple way of avoiding such feelings is to redraw the ideological barrier so that instead of it being between the two of you its around both of you: we are one team trying to figure something out. Confrontation becomes a collaboration. Much more effective. 12. Eliminate filler words Um, like, you know? eliminate these and many others from your vocabulary. It is better to say nothing than to fill space with useless language. Filler words will drop your perceived IQ by 15 points. Nobody wants this, least of all you.`],
	["blog_observations", "Observations on Interacting With Others", "29-9-2015", `In different social settings we have different ways of presenting ourselves, often to fit into the expectations of those around us. We do this so that they like us, one of the primary ways of deriving a sense of self-worth is through the approbation of others. Here are some tips for maximizing approbation while not alienating those around us. 
<br><br>
1. Don't make assumptions.
<br><br>
Making assumptions, especially about someone's ethnic or cultural origin, is one of the riskiest ways of starting off with someone. We often make this mistake because we want to impress others, but honestly the risk isn't worth it. Making a mistake is usually regarded as highly offensive and guessing correctly offers very few benefits. While asking certain questions may seem invasive or embarrassing, understanding when to give up and ask is very important when working with others. 
<br><br>
2. Make others feel important.
<br><br>
We strive for the appreciation of others. This is why we all wear masks of half-truths, masks that are adapted according to what we think others expect and want of us. While we change our presentation for others, often the other person is so involved in the same process that nobody gives the appreciation that everyone desperately wants. Wearing masks is a strange mix of self-sacrificing and egocentric; we are willing to change major aspects of ourselves to feel valuable. And when the appreciation we expect doesn't come, we wear the mask more and more desperately, willing to sacrifice more and more aspects of ourselves. This cycle can become destructive, very very easily. 
<br><br>
I prefer the opposite process, one that creates a win-win scenario. If you genuinely appreciate something that another person does, always say it. Always say nice, true things. There is no down-side. And this is exactly what others want; they just want to feel appreciated. 
<br><br>
Recently I went to Asha's Teahouse in Berkeley and I thanked the baristo for bringing joy to people through fabulous tea. After this token of appreciation, his face completely transformed. He went from tired to happy, really really happy, in a few seconds. He immediately replied <q>You're the guy!</q> I asked him what he meant. He then told me that I had done the same thing before - I had, five months before, and he remembered it. Appreciation is powerful, because it is what people so desperately want (especially in the service industry). 
<br><br>
While this process can be very powerful, you also have to watch out for negative expectations. A good example are gender expectations. Men are expected to pursue, women are expected to be pursued. It's stupid but it is the expectation. What this means is that there are opposite biases - guys being nice to women are suspected of ulterior motive (it's fair enough, too), and women being nice to men are seen as teases. When making someone of the opposite gender important, understanding this bias becomes quite important. Very few people actually appreciate others, so when someone does others are initially suspicious. 
<br><br>
In other situations the bias can be used for your benefit. For instance, in environments with a hierarchy perceived inferiors are typically treated like crap by perceived superiors. Superiors who do this not only are massively insecure but are missing a chance to win major brownie points. It's my impression that these superiors don't actually feel superior so they have to beat up underlings to prove their authority - prove it to themselves. A superior who knows they are an authority does not need to treat their underlings like crap - it fundamentally doesn't help anyone. But as this is the expectation, if a perceived superior is decent to perceived inferiors, that decency is amplified by the negative expectation. I have had so many amazing conversation and experiences with cab/uber drivers, homeless folks, and service workers because I treated them like equals in a situation in which they expected to be treated like inferiors. 
<br><br>
3. Start with commonalities, work to differences.
<br><br>
Human interactions can be seen in terms of energy barriers. We only meet new people if the energy barrier is lowered by what we can get from the interaction - the person may look interesting, they may be beautiful, they may have a nice smile. These all help lower the barrier. In conversations the best way of lowering the barrier is by targeting commonalities. By finding commonalities you make the other person more invested in the conversation. Another major barrier is lack of trust, when you establish commonalities and establish more credibility you can then move to away from commonalities to differences. Differences require more tact because there is potential for confrontation. So when I discuss differences I'm usually prepared to fall on my sword - I would prefer to keep a relationship intact than burn a bridge. 
<br><br>
4. Actually listen. 
<br><br>
Super simple but when I meet someone several times and I can remember personal minutiae the other person really appreciates it, and are often shocked. We're often so focused on projecting that we miss what the other person is projecting. If you listen the other person can feel assured and appreciated. 
<br><br>
5. To have a friend, you have to be a friend.
<br><br>
Relationships are an exchange. Each person requires something from the situation, if they aren't they shouldn't be in the relationship. While there is a big focus on unconditional love, it is a silly concept, because it is a relationship that could be completely arbitrary and meaningless. Often what people label as unconditional love is completely conditional, the conditions are just so obvious that they blend into the background. But by striving for this false ideal, people invest too much energy in the arbitrary and the meaningless. Moreover, unconditional love begets unconditional hatred. Emphasis on the arbitrary bleeds into other emotions and enables a lot of nastiness. By thinking about a relationship as a reciprocal exchange (but in two sets of terms) the relationship remains meaningful - trust and love is earned through meaningful actions. Distrust is also earned and is not arbitrary. 
<br><br>
Trust and love are always vulnerable. Happiness is always vulnerable. There is always something valuable to lose. Many people fear loss more than they want to gain - they choose secure unhappiness over insecure happiness. For this reason, most people won't invest in being a friend first, they are waiting for the other person to move. Once you understand happiness is always insecure and accept it, it is pretty easy to be the friend first. So many people are just waiting to be met, but they require others to take the brunt of risk and be the friend first. Just do it. It's worth it. 
<br><br>
6. Smile.
<br><br>
Lower the energy barrier. That's it. 
<br><br>
7. There is no down-side of being polite. 
<br><br>
Some cultures require manners and politeness in conversation. In southeastern US, politeness is required for conversation. When southeastern folks go anywhere else in the country they are inhibited by the fact that they can only interact in such specific conditions. But if you understand this, being polite is appealing to everyone - for the folks that require it, they will immediately like you because you fit in their expectations. For the folks that don't require it, they will either be pleasantly surprised or slightly suspicious that you're sucking up. This also applies to smiling and being cheery - in Northern Europe and in the northeastern US people initially think these characteristics are fake. Once they are convinced it is real, these folks really appreciate it though. Happiness is like infectious energy, and when others people catch it, the energy is amplified. 
<br><br>
8. Respect boundaries. Never impose your own values onto others. 
<br><br>
The values you have are a product of your experiences. Others' values are a product of their experiences. Understand that there is a fundamental barrier between your perspective and others' perspectives because of this difference in experiences. Respect this boundary. When you impose your own values on others, you are not properly respecting the fact that the other person's values may be consistent with their experiences. Being aware of this boundary allows you to discuss very sensitive topics in a very comfortable way - if it is made clear that you respect others' perspectives and their body of experiences you will have a collaborative experience rather than an adversarial one.
<br><br>
9. Persuasion requires valuing the other side.
<br><br>
I think many Americans imagine persuasion as holding your adversary in a death-grip of self-righteousness until they've been throttled into seeing the truth. This interpretation is guaranteed to fail. Effective persuasion is being a necessary mirror for another person - understanding their argument to such a high degree that you can explain it and its flaws in their terms. I do not do the persuading - they persuade themselves - but I am the necessary messenger. To be the messenger requires valuing the other person's perspective over missionizing them. This is difficult, to understand someone else's perspective fully you first have to be completely open to the possibility that your views could be wrong. For this reason I invest my trust not in my specific views but in my meta-views (i.e. views about views). I value self-improvement. Self-improvement is a certain way of looking at the nature of my interpretations, that my current interpretations are flawed and that through a process of identifying failures I will improve. This meta-view enables me to be wrong: to be wrong is an opportunity to improve. Many Americans invest their sense of self-worth in a specific way of viewing an issue. Consequently they cannot take the risk to understand other interpretations - to fully understand, one must start with the humility that they could be wrong. Otherwise there will be ideological barriers that prevent them from understanding, barriers for ideological self-preservation. Being the messenger requires I understand their interpretation and their motivational structure (i.e. how they see their self-worth) so that I can present a counter-argument and a certain motivational structure for them to be motivated to be persuaded. If you present a reasonable counter-interpretation without motivation to be persuaded, they will simply reject your argument. You need to provide both. 
<br><br>
10. Emotions beget actions. Actions can also beget emotions. 
<br><br>
People are social animals and emotions are infectious. Happiness, sadness, and anxiety can all be passed to others. A big mistake a lot of folks make is not masking the fact they are sad or anxious. A lot of the time these folks are wallowing in the cheap gratification of self-pity and want others to either commiserate or care. For the most part, they won't. They will either take advantage of you or avoid you like a leper. Both are bad. Both are highly risky and conflict with your objective. The way you solve your problem is by putting on a mask - be happy, be nice and others will be infected. And then you have a reason to be happy. Actions will beget complimentary emotions. 
<br><br>
11. Redraw barriers
<br><br>
When discussing very sensitive topics, redrawing barriers can reduce the chance of confrontation to zero. Confrontations occur when the one person gets defensive and thinks the other person is assaulting their views or their worth. A simple way of avoiding such feelings is to redraw the ideological barrier so that instead of it being between the two of you its around both of you: we are one team trying to figure something out. Confrontation becomes a collaboration. Much more effective. 
<br><br>
12. Eliminate filler words

<br><br>
<q>Um</q>, <q>like</q>, <q> you know? </q> eliminate these and many others from your vocabulary. It is better to say nothing than to fill space with useless language. Filler words will drop your perceived IQ by 15 points. Nobody wants this, least of all you. 
<br><br>
</p>"],
	["blog_ap", "Changes in AP US History Standards", "1-9-2015", "<p> 
 Throughout the country, examples of sexual assault and rape cases in colleges have been coming to light, demonstrating awful crimes within the student and administrative bodies. While the news has covered many individual cases, there has been comparatively little discussion about how such crimes can be countered. 
<br><br>
But by applying simple economic thought to the problem, an incredibly simple solution emerges. 
<br><br>
When it comes down to it, at the heart of this issue is sex, and in this little thought experiment, I am going to view sex as a commodity, in which women control the supply and men have the demand. While this is vastly oversimplified and not fully accurate (there is mutual supply and demand, women have demand for sex and men also offer the supply) it is very interesting to pursue the line of reasoning that follows from this general model. 
<br><br>
If one side controls all the supply and the other all the demand, the way the supplier can change the price of a good is simple: form a cartel. By forming a cartel, the supply of a good can be rigorously controlled and consequently the price can be manipulated. 
<br><br>
In this case, the commodity is sex and the price are the conditions of the <q>exchange</q> of the good: there is proper respect and consent before, during, and after sex. 
<br><br>
If, for instance, a majority of sororities formed a cartel with the joint agreement that they would refuse to attend parties at any fraternity that was not properly respectful, in the event of rape or sexual assault (or even lesser offenses) the supply of sex would be completely cut to the offending fraternity, and the the fraternity in question would have a very strong incentive to change their behavior and to punish the individual(s) who were acting out of line. 
<br><br>
Moreover, frats would have no other recourse than to change their behavior. While cases of sexual assault and rape are often murky because of lack of witnesses and Americans' strange perception of alcohol (drunkedness = not responsible), acts of sober intimidation are not. If a fraternity attempts to intimidate sorority members to return to their parties, it will back-fire and they could be faced with lawsuits. Also, if one assumes that most men in fraternities are properly respectful, there is a strong incentive for these issues to remain in-house; changing the behavior of a few nasty individuals is less costly than risking criminal records for attempted intimidation. Thus, frats would really be left with one option: sort out the bad members so that the entire frat can benefit from girls coming back to parties. 
<br><br>
Finally, this model would also benefit the frats that are respectful, especially in the beginning. In the beginning of such joint action, for every disrespectful frat that is banned, the more supply there will be for the respectful frats, further incentivizing good behavior. 
<br><br>
Viewed in these economic terms, women truly have all the power to force men to clean up their act, provided they form united fronts. 
<br><br>
While cartels and monopolies usually get a bad rap, this is a case in which they could enable positive social change.


 </p>`],
	["blog_college", "College Sexual Assault: An Economic Solution", "25-6-2015", `<p>
 Last fall I was having a conversation with a friend and she said, <q>You know, people should be proud of their race, they should be proud.</q> What struck me was the false equivalency that this statement implied, that race and culture were causal, not associative. I immediately asked her, <q>but should not they be proud of their culture? I mean, why should anyone be proud of race? It is fairly arbitrary, but cultural identity? That is something to be proud of.</q> Initially she was skeptical, but then I explained that I was German by ethnicity, but I was certainly not German culturally, and was proud to be an American, not a German. (not to say there is anything wrong with Germans) And being ethnically German? Why would I proud of that? Did I earn it? Of course not, in some cosmic lottery I was born with certain characteristics. 
<br>
<br>
That evening I reflected on the conversation and I came to the conclusion that the false equivalency of race and culture unpinned racist thought. Objective factors, rooted in culture, serve as justification for discrimination on the basis of race. This justification is dependent on the assumption that there is causality between these factors. But when it comes down to it culture and ethnicity are tied to same source but are fundamentally associative, both are the product of long-term isolation. 

<br>
<br>
Culture is the accumulation of perspective, and when a society exists in relative isolation this body of perspective is un-augmented by other perspectives. Consequently it goes in its own unique direction and certain cultural characteristics are perpetuated. Similarly in relative isolation certain genetic factors are perpetuated due to the Founder's Effect; in a small community there is a convergence toward genetic homogeneity. Isolation consequently leads to unique culture and race. 

<br>
<br>
But when it comes down to it, culture is taught while race is inherited. Consequently these factors are associative, although for the majority of history that associativity has been quite accurate. We have become a connected world quite recently, in historical terms and certainly in biological terms. For most of history, really until the colonialism, race would indicate culture. But that indicator depended on isolation, a factor that is disappearing due to the change in communications and the increasing interdependence through trade. 

<br>
<br>
In the world today, there are plenty of counterexamples of this false causality: in this country of immigrants, we are Americans culturally despite coming from all regions of the globe and from a huge range of racial groups. 

<br><br>
One of the ways of de-legitimizing racism is breaking down the perceived chain of causality. What is legitimacy? It is proof. Without a logical basis, one can target an issue rationally, even if the issue is emotionally driven. Even emotionally driven issues need a superficial logical basis. And that superficial reasoning is that race and culture are causal. What is the emotional basis for racism? Inadequacy. 
<br><br>
The American morality is based on the ideal of absolute freedom. With freedom comes choice and with choice comes personal responsibility. This is why we lionize people like Steve Jobs while hating (or completely ignoring) the downtrodden: the Steve Jobs are self-made and are fully responsible for their success while the poor are fully responsible for their poverty. Moreover, this is why edge case examples of people who do not fit into the model are roundly rejected: mental illness does not fit into this model at all. While this basis of morality encourages excellence, it also perpetuates cyclical poverty and discrimination. Moreover, it encourages lazy reasoning. Americans all want to be the <q>good guy,</q> this is readily apparent in our films and in our mythology of superheroes and gunslingers. But due to the degree of personal responsibility in this country, it is often easier to apply lazy reasoning to one's actions to be the good guy than to critically analyze the full chain of causality only to find that you might be the bad guy. Consequently there is a negative incentive for critical reasoning engrained within our morality. This has contributed to the streak of anti-intellectualism in America, a streak that is also shielded by the base assumption of democracy: we are all equal, which means my ignorance is just as good as your intellectualism. 
<br><br>
But in a culture with such a great degree of personal responsibility and such individual pressure for excellence, those who feel insecure would be attracted to the sense of superiority that prejudice provides, a sense of superiority that is fundamentally arbitrary. Prejudice, however, is a false premise that superficially legitimizes itself: if I think blue people are bad, I will not hire them or let them into my schools, limiting their economic and educational opportunities. Consequently a disparity in education and wages will then create objective differences between me and blue people, the blue people will be poorer and have higher levels of crime and incarceration, which superficially justifies the initial assumption that blue people are bad people. This is why changing racist attitudes is so difficult, especially in a culture in which it is necessary for a sense of personal adequacy; provided one follows the superficial reasoning that race and culture are causal, prejudice creates its own <q>proof.</q> 
<br><br>
Consequently targeting the <q>proof</q> will be insufficient, it is the superficial logic that creates its own proof. The logic must be the target, and must be broken down. And it is broken down by understanding the associativity of race and culture. 
<br><br>
What makes targeting this logic quite difficult is the fact that both perceived victims and victimizers appear to believe it. In comedy, why is it is only acceptable for a person within a specific racial community to make fun of their own racial community? A white person who makes fun of an Asian American is a racist, but an Asian American making fun of their community is acceptable. This holds true with all <q>minority</q> groups in the US, there are tacit racial boundaries. The reason there are racial boundaries is because of the false causality of race and culture. If I do not belong to a racial community, I cannot possibility understand their culture. In a sense, I have no racial ethos, that is only gained by having the same race. 
<br><br>
This also explains why there is a vastly different interpretation of the <q>N-word</q> based on who says it. Why is it acceptable for an African American to use a term that denotes a long history of abuse and racism? It is exactly because it indicates a shared experience and a shared victimization of African Americans. Race may motivate those common conditions and experiences, but what unifies people is not race itself, it is the profound perspective and culture that is shared. But this false causality is why ex-NAACP leader Rachel Dolezal pretended to be black. While she identified with African American culture, she would not have racial ethos if she was not black. But could she identify with that culture? Does someone have to be a particular race to fight for the advancement of all colored people? If the end goal of the organization is have a world in which colored people are treated with the same dignity and respect as white people, then the distinction could be self-defeating. (http://www.cnn.com/2015/06/16/us/washington-rachel-dolezal-naacp/). Her credibility was dependent in part on her race. Thus this misconception is shared by both perceived victims and victimizers alike, perpetuating the false logic of racism. 
<br><br>
There is an irony to this because <q>white</q> is actually a conglomeration of different European ethnicities, and of different European minority groups. While there used to be racial boundaries between these European ethnicities, even to a violent degree, they eventually became non-issues. This is why making fun of whites is a non-issue, because nobody gives a shit anymore. Using history as a guide (after all, history is the human data set) and looking at the development of the concept of <q>white,</q> becoming a <q>post-racial society</q> requires race to become a non-issue, but not culture. There are still many Irish-American communities that are proud of their culture. There are still Little Italy sections in many American cities that celebrate Italian culture. There are entire holidays that celebrate these individual cultures, which people outside of that specific racial community can still enjoy. Culture is still celebrated, but race has become a non-issue. Non-Irish can learn Irish Step-Dancing and have a great time on St. Patrick's Day. The false causality has been broken down, and people get over arbitrary racial differences, while celebrating objective cultural differences. This is certainly not to say the whites are some paragon of good, but simply looking at American history and the consistent racism against every new way of immigrants, <q>white</q> is a step in the right direction, with the end-goal of <q>human</q> being the only meaningful racial term. 
<br><br>
Breaking down the logic would logically lead to racism splitting into racism and culturalism, the former being arbitrary and the latter being objective. If I criticize the American perception of freedom and its relationship with cyclical poverty, it is fair game, because attitudes and ideology inform actions and actions create circumstances (which then perpetuate attitudes somehow). While some people might accuse me of being un-American, I would simply say that I love this country enough to seek to improve it, and critical thought and criticism are necessary for self-improvement. 
<br><br>
Culturalism leads to its own controversies though. It would make rational debate over religion fair game, which would especially offend Christians, Muslims, and Jews (it seems like the monotheistic religions have the <q>hardest</q> sense of reality and truth, polytheism like Hinduism is a lot more fluid and enables broader interpretation). This may be a reason that culturalism has not emerged yet, because the American people are still quite religious. 
<br><br>
How can the American morality be changed to encourage more rigorous reasoning? I believe it can be by changing the definition of freedom slightly: in the absence of information I am not free, in fact I have no choice. Imagine being born without any sensory information at all. In those conditions how can one act? How can I effect change on circumstances? I cannot. If I have one piece of information how I respond to a situation is limited to that information. Consequently the more information I have and the more rigorously I understand a situation the more choice I have and the more freedom I have. Consequently knowledge enables freedom, and freedom enables a positive sense of self worth. Conversely knowingly remaining ignorant is a rejection of one's own right to a life and to one's own freedom. Only those without intrinsic human worth would reject their own freedom. What this shift requires is moving away from a nearly absolute sense of freedom we currently hold as truth. This sense of absolute freedom can already be logically toppled: on a slightly silly note the fact I cannot transform into an elephant right now is clear proof that I am not absolutely free. 
<br><br>
What follows from this is a probabilistic view of freedom: in every frame of time I have a limited number of potential actions I can take; I cannot turn into an elephant. Responsibility follows from choice, and I should only be responsible for the range of choices that are left for me. This view of freedom encompasses more <q>cases</q> than our current view on freedom does. Our current view of freedom does not account for racism, mental health, or cyclical poverty and incarcerations. In fact, it turns a blind eye to them, in each case one's <q>will-power</q> (or lack thereof) is to blame. 
<br><br>
With a more probabilistic view of freedom, racism and the constraints it imposes on one's choices are taken into account, as are the other aforementioned conditions. What is currently lacking is data, the raw data necessary for a probabilistic view of freedom to be feasible, data that is increasingly accessible in large quantities every day. 
<br><br>
While the American ideal of freedom seeks a fully singular individual, solely responsible for their own conditions and what they make of themselves, this ideal will never, ever be a reality. Consequently, we must depart from it, in order to find a system of thought and morality that is able to structure our behavior more effectively in the situations that the current system cannot account for. 
<br><br>
While this is my take on an issue, it could (and probably is) flawed to a certain degree. Criticism is necessary for self-improvement and is always welcome. selleman@berkeley.edu 
 
 


 </p>`],
	["blog_racism", "The False Logic of Racism", "25-6-2015",`<p> 
It just occurred to me that how one perceives compliments indicates a tremendous amount about how they see the source of self-worth. When I see men complimenting women often the compliment is a kind of debt to be repaid. The only way such a debt would ever exist is in a system in which self-worth was determined by others. In that system, a compliment would be a kind of debt, because the giver has <q>added</q> to the self worth of the receiver. 
<br><br>
This is why many men recoil when women not only accept their compliment, but agree with it: by agreeing with it, the receiver has rejected the obligation that the giver initially expected (and undoubtedly would try to leverage later on). While the giver often labels this as immodesty, this is an accusation used to regain the upper-hand in the power dynamic (essentially by shaming the woman). 
<br><br>
On the other hand, when I see compliments as a form of gratitude, the intent of the compliment is not to define the worth of the other but to express appreciation. Gratitude or appreciation is one-directional, defining only the receiver in the eyes of the giver, and whatever effect it has on the self-respect of the receiver is defined by the receiver. In these cases I have never seen the giver recoil when their compliment is accepted by the receiver (simply because the giver does not expect a debt with the compliment). 
<br><br>
I think this is a very effective and simple test for women to use to gauge men: if the man recoils when a woman agrees with a compliment, one way or another the man sees your worth as dependent on their opinion, if they do not, the compliment was made out of gratitude and they did not expect their opinion to affect your own self-respect. 
<br><br>
While I am using an example about gender dynamics, I have seen the exact same thing with white people complimenting minorities (in the US) and able-bodied people complimenting those with handicaps. In the Autobiography of Malcolm X, there were striking examples of drunk whites wildly complimenting African Americans. In the text Malcolm X found these cases quite strange; he describes the whites as feeling <q>magnanimous</q>. Using this interpretation however, it makes sense: the whites felt magnanimous because they were <q>giving</q> self-worth to the African Americans <q>for free</q>. They saw the value of the African Americans as dependent on the opinion of whites because whites were supposedly superior. 
<br><br>
What all three of these relationships have in common is that the power dynamic is dependent on affecting the self-perception of the receiver of the compliment. In Black Skin, White Masks by Frantz Fanon, he said that slavery is actually a system of self-perception; the only way that a huge enslaved majority can be controlled by a tiny ruling majority is if they have been taught to agree with with the minority about their own worth. 
<br><br>
So if you are ever complimented, here is my advice: own up to it, own up to your own worth and your own awesomeness. It will do two things: 1.) It will indicate if the giver of the compliment believes they can define your worth and 2.) By defining your own self-worth, you will prevent others from arbitrarily (on the basis of race, gender, sex, etc.) having influence/power over you. 
<br><br>
While many people would probably see this advice as inappropriate, how is it actually? If I compliment a friend for being awesome why is it inappropriate for them to recognize independently what they rightfully deserve? If I treat people with the dignity and respect they deserve, why am I unable to recognize it along with the self-respect associatied with being a decent human being? I believe our conception of immodesty comes from a catch-22 in Christianity (especially the more Puritanic interpretations): if you are morally irresponsible, you have to recognize your sin, and if you are morally responsible you cannot recognize it because you would then be proud, and like Lucifer would be struck down. Thus self-respect becomes a form of pride, and pride begets immodesty. 
<br><br>
While this is my take on an issue, it could (and probably is) flawed to a certain degree. Emails are appreciated and criticism is always welcome! selleman@berkeley.edu

 </p>`],
	["blog_litmus","Litmus Test: Compliments & Worth", "13-6-2015", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_kant", "Kant & Concurrency", "2-12-2014", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_self", "Changing Conceptions of the Self and Reality", "12-5-2015", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_role", "The Role of the Other", "25-2-2014", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_maher", "Bill Maher and Berkeley Tolerance", "1-11-2014", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_civil", "US Civil-Military Relationship", "12-2-2012", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_sleep", "Unable to Sleep - Rote a Poem Instead", "Fall 2013", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`],
	["blog_english", "Response to Politics and the English Language", "13-9-2012", `<p> (written as a forum question for my algorithms and databases course)
 <br><br>
I was reading over the last discussion about concurrency and the relationship between processors and memory and it seems to have quite a bit in common with Kant's ideas on transcendental idealism. Kant thought that the human mind was dependent on intuitions and concepts for it to be functional. According to Kant, intuitions are perceptions without definition while concepts are definitions without substance. For intuitions to be meaningful, they need concepts and vice versa or both would be meaningless. Could a parallel be drawn to processing and memory? Memory definitely seems to have a parallel function with concepts. Memory stores definitions but those definitions seem to be meaningless without more context. The processor seems to apply the definitions stored in the memory onto other data that would be meaningless (to the computer) without the stored definitions. For instance, let's say there is a computer that specializes in voice-recognition. While it may have definitions stored in its memory (concepts), without inputted information (in this case, voice recordings, which would be equivalent to intuitions) that stored information would itself have no meaning - it's meaning is dependent on the nature of the inputted data. On the other hand, if a voice recording were uploaded to a regular computer without voice-recognition capabilities the recording would be meaningless as well. It almost seems like computation, like Kant's idea of the mind, is dependent on concepts and intuitions (or at least equivalents to them). 

While I may be forcing this parallel I think there is an element of truth to it. 
 
 </p>`]
	/*["blog_jurassic", "Jurassic Park", "4-7-2015", ""],
	["blog_interstellar", "Interstellar", "4-7-2015", ""],
	["blog_reich", "The Rise and Fall of the Third Reich", "4-7-2015", ""],
	["blog_mask", "Black Skin, White Masks", "18-3-2015", ""]*/


];
