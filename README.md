# Webdesign 2020
No more boring transcripts during a podcasts. A podcast without sound made for <a href="https://www.linkedin.com/in/marie-van-driessche/?originalSubdomain=nl">Marie van Driessche</a> by <a href="https://www.linkedin.com/in/tim-t-37611ab6">Tim Terwijn</a>.

## Demo:
https://timterwijn.github.io/web-design-1920/

![Logo](/docs/img/Logo.png)

## Introduction
Marie is a designer and someone who is born Deaf. This means that sign language is her main language and that she does not consider her disability a disability because she is used to it. She did tell us that she does not understand some emotion in closed captions and podcast transcript, like "scary music" she does not understand what that means. That is why I wanted to make something for her where she could experience those emotions in a fun way. To achieve this I wanted to use colours in text. For example, If someone expresses a word with enthusiasm, I wanted to use the colour orange for that word but if someone says a word a bit serious I wanted to make that word gray.

### User scenario TLDR
<i>Who: Marie van Driessche, a designer and someone who is born Deaf.</i>  
<i>What: An application where Marie can experience the emotions of certain words in a sentence.</i>  
<i>How: By making a fun application where words are coloured, orange for enthusiasm and gray for serious words.</i>  
<i>Why: Because it is fun and also to help Marie.</i>  

## Table of contents
* [Install guide](#install-guide)
* [How to use](#how-to-use)
* [Wireflow](#wireflow)
* [User experience](#user-experience)
* [Difficulties](#difficulties)
* [Progressive enhancement](#progressive-enhancement)
* [Feature detection](#feature-detection)
* [Road map (and feedback)](#Road-map-(and-feedback))

## Installation
Clone or download the repository $ git clone https://github.com/TimTerwijn/web-design-1920.git.
Go to index.html in your browses.
Enjoy the conversation.

## Exclusive Design Principles
### Provide a unique experience
The application needs to work perfect device of your user. In this case, Marie wanted to use the application on her phone. That is why I made a responsive mobile application. Sure you could use it on a computer too, but it looks less great. Also, Marie can not hear any sound, so I did not implement any sound of the podcast inside her application.

### Study situation
It is important to know what situation you are in to. Marie is Deaf, that means that she is born deaf and does not like to be treated as a disability. It is funny because she did not like my second prototype because I think she actually felt a bit insulted by my idea. She said that this idea was more useful for someone with a learning disorder.

### Prioritize identity
It is important to add the taste of your user to and a bit of your own to your exclusive personal project. That's why I chose a podcast of Vasilis because Marie is a designer and I thought she would enjoy listening to it, and I wanted to create something with cartoons so I added something of my own.

### Ignore conventions
By only using regular conventions when there is no other choice, your user will be more surprised with your results. I did this by thinking about something unique like all my prototypes and not making something that looks like Whats-app.

### Add nonsense
It is important to add something unexpected to your project so that users do not fall asleep while they are using it. I have added the text bulbs and thought clouds as nonsense of my product.

## Progress
During my last minor mobile development I had a Designing Mobile Experiences course from Anne Marleen Olthof. She learned me the Think Make Check principles. This web design course looks a lot like DME in my opinion, so I took the opportunity to use the skills I learned last semester again.

Think Make Check works in cycles (Iterative). Each cycle contains three phases which are called together Think, Make and Check. For me the cycle works as follows:
* During the Think phase you think about what you are going to do this cycle.
* During the Make phase you make the things you thought about.
* During the Check phase you test your work with testers to find out if your thinking was correct.
* Repeat.  

![think-make-check](/docs/img/think-make-check.png)

### Week 1
#### Think
For the first think phase I thought about the problems Marie has. She is Deaf so I assume she has problems listening to things on the web and also to understand certain behavior of people that can listen to sound. I think I am able to fix her problem by making website with an Iframe where she can browse websites and when some audio is played it appears on her screen. I want to make use of gifs/images to show Marie the things she does not understand with certain words (the fun part of my project).

#### Make
Before the interview I made a small demo that I can present my idea to Marie.
![prototype1](/docs/img/prototype1.png)

#### Check

After that I showed my demo to Marie but it was quite the challenge to show my work and talk at the same time, because Marie could not look at my emotions, look at the translator and see my work. So for the next time I want to talk first and show my demo thereafter in small chunks.

![demo](/docs/img/demo1.png)

This is the feedback I had received from Marie:
* She did not like the idea of a screen in a screen (Iframe), she would like to have use her browser for browsing and use my application in the background. My solution for this is to make the application mobile first so that Marie can look at her phone during a podcast (or any sound at all.).

* Marie doesn't know when her computer is supposed to make any sound that's why I narrow the use case of this application down to only the podcast. That does not mean that she can use the application for anything else tho. If I have some time left for this project I could have the phone vibrating once or showing some light when sound is playing. But that's out of the scope for now.

* If multiple people are talking during the podcast (or something else). It is maybe hard to understand who is talking at the moment.I have to test this to figure out if this is the case, and think of a solution.

#### Think
Marie told us today that Deaf people have their own culture and are not speaking exactly the same languages as Dutch people. They use fewer words to make something clear to each other and I think that is pretty cool and it also blew my mind a bit.

![blind-life](/docs/img/blind-life.png)

It made me also think about my fun part. If Marie and other Deaf people prefer images and sign language over regular text. It would be cool to replace the subjects and maybe other parts of a sentence with images and/or an image of sign language.

#### Make
I made a simple application with a speech to text functionality to test if my project is doable. I found out that the application could indeed record some simple words. But it was impossible to record large texts because it took a long wile before it shows anything and after it shows something it was only a small part of the whole sentence.

![record-demo](/docs/img/recordDemo.PNG)

### Week 2
#### Think
Because last week did not work out, I had to change my idea. So this week I started with a brand new idea. I want to work the podcast out even more. So here is my 4 step plan for the next week.

* First of all, I need to pick a podcast that Marie likes.
* Secondly I need to translate the podcast to sign language gifs and apply images of objects where possible.
* Then I need to show those gifs and images inside an application one at a time to transfer the message of the podcast to Marie.
* Lastly I need to make it fun to use, so I want to add fun transitions between gifs and images.

So it would look a bit like this:  
![voorbeeld1](/docs/img/voorbeeld/kom.gif)  
![voorbeeld2](/docs/img/voorbeeld/jij.gif)  
![voorbeeld3](/docs/img/voorbeeld/naar.gif)  
![voorbeeld4](/docs/img/voorbeeld/boom.png)  

#### Make
However, before I can do anything of the above plan I need to be sure if Marie likes my idea. I have to show my idea and talk about my 4 step plan and use the above image for that. I also have to make a prototype which you can see in the next image.

![demo2](/docs/img/demo2.png)

#### Check
I showed my second prototype to Marie, but sadly Marie did not like my idea at all. She thought it would be a step back from my previous plan. (Which is correct.) And she also felt a bit insulted because the app was perfect for Deaf people who also have a learning disorder but because this has to be an app for Marie, it is not a useful app for her. So I have to go back to the drawing board.

![demo22](/docs/img/demo22.png)

#### Think
If I want to deliver a usable prototype for Marie, with only one feedback session left, I really need to play safe now. And I have to start working on it as soon as possible. I would be wise to use feedback other students received from Marie to make my own simple (but fun) Podcast application. For me this is the best chance I have to show something useful to Marie next week.

That is why I am going to work on a simple Podcast application with the help of the feedback that other students received. (I wrote them down as well.)

#### Make

After that, I started working on a prototype. I know now that Marie preferred text over images and sign language, so I made another prototype. This time I want to show some sort of cartoon where the story is text based and one person talks (visible) and the other person is shown listening and thinking. The user of the application can see the conversation, the emotions and the thinking (in images) during the conversation.

![prototype3](/docs/img/prototype3.png)

Some features I would like to implement are:
* When someone talks, their lips are talking animated in a funny way.
* The speaker his story is written in text inside a text bubble.
* I want to show the emotions of the speaker with colours, fonts, bolt and italic. The meaning of that emotion will be explained.
* The lips of the listener are silenced.
* You can see the thinking of the listener.

### Week 3
#### Check
So today I showed my progress to Marie. She liked my idea and found it really cool that she can see the orange and grey colours inside the story.   

But she also joked a bit that she had the feeling that Jenny was in love with Vasilis because Jenny thinks about him during the his introduction.  
  
![Jenny in love](/docs/img/Jenny-in-love.png)

I asked her what she thought about the moving lips, animated letters and the other special things. But she told me that maybe I am a bit too much ambitious and that less is more during a professional conversation like that of Vasilis and Jenny. I asked her what features she preferred and she told me that animated text like fond size transitions would be awesome. Colour in text could be a second one and she thinks it is better to use the other ideas, because less is more.  

![prototype1](/docs/img/demo3.png)

### Wishlist

Now that the tests with Marie are done, I have thought about the thinks I would like to implement for the next think make check cycle.
* Text should not be synchronized. I want a fixed time between talks so that it is readable.
* I want to show the emotions of the speaker with colours, animations, fonts, bolt and italic.
* The meaning of an emotion should be explained with a real time legenda.
* Text should be in the middle of e text bubble.
