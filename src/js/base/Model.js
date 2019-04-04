window.Model = function(options){
	let resourceName = options.resourceName
	return {
		init: function(){
			var APP_ID = 'a49OQyiecerd6yLJ7SKOqlkd-gzGzoHsz'
			var APP_KEY = 'TausK8e7VxmashB6O9OBzkz6'
			AV.init({appId: APP_ID, appKey: APP_KEY })
		},
		fetch: function(){
			var query = new AV.Query(resourceName);
			return query.find() // Promise 对象			
		},
		save: function(object){
			var X = AV.Object.extend(resourceName);
			var x = new X();
			return x.save(object)
		}
	}
}