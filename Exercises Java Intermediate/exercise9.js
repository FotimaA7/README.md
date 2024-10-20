function checkSubstring() {
    const mainStr = document.getElementById('mainStr').value;
    const subStr = document.getElementById('subStr').value;
    const isSubstring = mainStr.includes(subStr);
    alert(`Substring is ${isSubstring ? 'present' : 'not present'}`);
}
