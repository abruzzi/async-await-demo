async function loadProjectsAndShow () {
	var projects = await fetch('data/juntao.qiu.projects.json');
	return projects.json();
}

loadProjectsAndShow().then(function(projects) {
	var container = document.querySelector('#container');
	
	projects.forEach(function(project) {
		var ele = document.createElement('h5');
		ele.innerText = project.project.name;
		container.appendChild(ele);
	});	
});