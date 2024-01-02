# IPA Conversion Tool

### <a href="https://afoster8.github.io/ipa-converter/">Check it out here!</a>

Really basic tool for converting from IPA to English and from English to IPA. Don't use this to cheat on your linguistics homework, because it could be inaccurate.

## Convert from English to IPA

Convert from English to IPA via <a href="https://en.wikipedia.org/wiki/ARPABET">ARPAbet</a>. The majority of the work here was done by Carnegie Melon University, in creating a 130k word list with mappings. All I did was map from ARPAbet to IPA.

Any punctuation besides .?! will be ignored, and all of those three will be replaced with a . 

Other than that, pretty straightforward!

## Convert from IPA to English

Convert from IPA to English via ARPAbet. Allowed IPA characters include:

aʊ  aɪ  eɪ  oʊ  ɔɪ  tʃ  dʒ  ɑ  æ  ʌ  ɔ  ə  ɚ  ɛ  ɝ  ɪ  ɨ  i  ʊ  u  ʉ  b  d  ð  ɾ  l̩  m̩  n̩  f  ɡ  h  k  l  m  n  ŋ  ɾ̃  p  ʔ  ɹ  s  ʃ  t  θ  v  w  ʍ  j  z  ʒ

There are also a lot of words in English that are said exactly the same but are spelled differently! When you input a sentence, the tool will find all matches and give them all to you. The more common the word, the less useful this is.

In general, harder to test and more annoying to use than the converting from English to IPA. 

## CMU Copyright Notice

The <a href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict">Carnegie Mellon Univeristy Pronouncing Dictionary</a> was used as a source of ARPAbet transcriptions for English words. The copyright notice is below. 

<i> Copyright (C) 1993-2015 Carnegie Mellon University. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. The contents of this file are deemed to be source code

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

This work was supported in part by funding from the Defense Advanced Research Projects Agency, the Office of Naval Research and the National Science Foundation of the United States of America, and by member companies of the Carnegie Mellon Sphinx Speech Consortium. We acknowledge the contributions of many volunteers to the expansion and improvement of this dictionary.

THIS SOFTWARE IS PROVIDED BY CARNEGIE MELLON UNIVERSITY 'AS IS' AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL CARNEGIE MELLON UNIVERSITY NOR ITS EMPLOYEES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. </i>