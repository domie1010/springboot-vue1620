const base = {
    get() {
        return {
            url : "http://localhost:8080/dianyingdingpiao/",
            name: "dianyingdingpiao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianyingdingpiao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "影院订票系统"
        } 
    }
}
export default base
