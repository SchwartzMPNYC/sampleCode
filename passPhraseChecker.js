/*http://adventofcode.com/2017/day/4
Both parts of problem can be handled with code from second part

Take a list of pass phrases and make sure that each phrase has no duplicates or words that can be anagrams of one another.
*/
const passPhraseChecker = passes => {
	// Requirement is that no word can be an anagram of another.

	// split input first into different phrases, then use map to get sub arrays of each word.
	const splitPasses = passes => passes.split("\n").map(pass => pass.split(" "));

	// Use Set as an intermediary to filter out duplicates from an array, then turn back into array
	const getUniqueArray = nonFilteredArray => Array.from(new Set(nonFilteredArray));

	// take every individual word in a phrase, alphabetize each letter, return array of newly alphabetized words
	const alphabetizeEveryLetterInEveryWord = pass => pass.map(word => [...word].sort().join(""));

	// apply filtering to list passwords, see if length of list changes
	const filterListandCompare = passes => getUniqueArray(alphabetizeEveryLetterInEveryWord(passes)).length === passes.length;

	// split raw list, get list of passes that pass filter, return length of list
	return splitPasses(passes).filter(passes => filterListandCompare(passes)).length;
};

let input = `bdwdjjo avricm cjbmj ran lmfsom ivsof
mxonybc fndyzzi gmdp gdfyoi inrvhr kpuueel wdpga vkq
bneh ylltsc vhryov lsd hmruxy ebnh pdln vdprrky
fumay zbccai qymavw zwoove hqpd rcxyvy
bcuo khhkkro mpt dxrebym qwum zqp lhmbma esmr qiyomu
qjs giedut mzsubkn rcbugk voxk yrlp rqxfvz kspz vxg zskp
srceh xdwao reshc shecr
dcao isz wwse bbdgn ewsw qkze pwu
lbnvl lviftmr zqiv iadanl fdhrldn dlaani lxy dhfndrl fkoukx
raovmz pdysjsw hqps orsyqw rrwnzcz vrzoam jjljt
wgt gzi icpwp qeefgbe msadakj jbbrma sbj dufuujx zex
cfzx bvyu eswr hafcfy klw bgnhynv qrf aop
rzlq atrzcpb hpl pajjw cdxep ean aptzcrb rzcbapt
xogpf ucc nsukoz umtfbw xfvth ozusnk fopxg ubp iflb
xot nqcdyu kpwix szo cyxv hpmp hwtrc zso nyuqdc aha
mkzf cat tkjprc izxdggf obspan lmlbg bsyspf twox
lfmfrd ooclx tcl clt`;

console.log(passPhraseChecker(input));
