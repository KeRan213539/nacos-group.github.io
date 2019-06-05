export default {
  'en-us': {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: [
        {   title: '阿里巴巴基于 Nacos 实现环境隔离的实践',
            author: '@正己',
            dateStr: 'Jun 5, 2019',
            desc: '说到环境隔离，首先应该搞清楚什么环境。 环境这个词目前还没有一个比较统一的定义，有些公司叫环境，在阿里云上叫region，在kubernetes架构中叫namespace等等。',
            link: '/en-us/blog/address-server.html',
        },
        {   title: 'Nacos 1.0.0 发布，正式大规模生产可用',
            author: '@敦谷',
            dateStr: 'Apr 10, 2019',
            desc: 'Nacos 1.0.0是正式GA的版本，在架构、功能和API设计上进行了全方位的重构和升级，在经过3个RC版本的社区体验之后正式发布，1.0.0版本标志着Nacos已经可以大规模在生产环境使用。',
            link: '/en-us/blog/nacos1.0.0.html',
        },
        {   title: 'Nacos 0.9.0 发布，稳定的快速迭代',
            author: '@邢学超 @风卿',
            dateStr: 'Mar 7, 2019',
            desc: 'Nacos一直秉承着稳定性和快速迭代，Nacos 0.9.0版本于上周正式发布release，功能围绕着，Nacos-Sync的稳定性、Server功能拆分部署、Nacos python语言体系的支持。',
            link: '/en-us/blog/nacos0.9.0.html',
        },
        {   title: 'Nacos 发布 v0.9.0',
            author: '@邢学超',
            dateStr: 'Feb 28, 2019',
            desc: '阿里巴巴微服务开源项目 [Dubbo Nacos](https://github.com/alibaba/nacos)  于本周发布v0.9.0版本，实现了server拆分功能和修复了13个issues。',
            link: '/en-us/blog/nacos0.9-intro.html',
        },
        {   title: 'Dubbo Nacos 发布 v0.8.0 PRE-GA版本，安全稳定上生产',
            author: '@张龙 @彦林 @风卿',
            dateStr: 'Jan 20, 2019',
            desc: '阿里巴巴微服务开源项目 [Dubbo Nacos](https://github.com/alibaba/nacos)  于本周发布v0.8.0（PRE-GA）版本，终于初步完成了Road Map一个重要的里程碑版本。',
            link: '/en-us/blog/nacos0.8.html',
        },
        {   title: '虎牙直播在微服务改造方面的实践和总结',
            author: '@张波',
            dateStr: 'Feb 10, 2019',
            desc: '文章整理自虎牙基础保障部中间件团队负责人张波（社区ID：zhangjimmy）在Dubbo Meetup 广州站沙龙上的分享，介绍虎牙在DNS、服务注册、CMDB和服务配置中心等方面的实践',
            link: '/en-us/blog/huya-practice.html',
        },
        {   title: '虎牙直播共建Nacos生态',
            author: '@于怀',
            dateStr: 'Jan 10, 2019',
            desc: '虎牙中间件团队也深入参与了Nacos生态的构建，核心成员张波、周建、李志鹏参与构建了Nacos生态，把虎牙的业务模型和生产部署经验也共建到Nacos生态中。',
            link: '/en-us/blog/huya-nacos.html',
        },
        {   title: 'Nacos 有哪些典型的应用场景？—— 配置管理篇',
            author: '@何煦',
            dateStr: 'Dec 06, 2018',
            desc: '本文将围绕“Where”，讲述 Nacos 配置管理的三个典型的应用场景：数据库连接信息、限流阈值和降级开关、流量的动态调度',
            link: '/en-us/blog/5w1h-where.html',
        },
        {
            title: 'Nacos 发布 0.6 版本，支持Dubbo生态并且支持Docker部署',
            author: '@马昕曦、@张龙、@邢学超',
            dateStr: 'Nov 29, 2018',
            desc: '本文介绍了阿里巴巴的微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos) v0.6 版本，该版本主要在支持了Dubbo生态和Docker部署',
            link: '/en-us/blog/nacos0.6.html',
        },
	    {
            title: '使用Nacos实现Spring Cloud Zuul的动态路由',	
            author: '@叶志远',
            dateStr: 'Nov 29, 2018',
            desc: '本文介绍了如何基于阿里巴巴的微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos) 实现Spring Cloud 中基于zuul的动态路由能力',
            link: '/en-us/blog/dynamic-route-zuul-nacos.html',
        },
        {
            title: 'Nacos 计划发布v0.5版本，支持DNS-SD',
            author: '@kunyu @dungu',
            dateStr: 'Nov 25, 2018',
            desc: '阿里巴巴微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos)于本周发布 v0.5.0 版本，该版本主要在 DNS-based Service Discovery，支持 TTL，支持 Java 11，优化Nacos产品用户体验，与Spring Cloud Gateway的集成等方面做了演进。',
            link: '/en-us/blog/nacos0.5.html',
        },
        {
            title: 'Nacos 进入CNCF landscape',
            author: '@xingxuechao',
            dateStr: 'Oct 28, 2018',
            desc: 'Nacos 被CNCF 纳入landscape大图',
            link: '/en-us/blog/cncf.html',
        },
        {   title: 'Nacos 帮我们解决什么问题？—— 配置管理篇',
            author: '@何煦',
            dateStr: 'Oct 17, 2018',
            desc: 'Nacos 是阿里巴巴今年7月份开源的项目，如其名， Naming and Configuration Service ，专注于服务发现和配置管理领域。本系列文章，将从 5W1H（What、Where、When、Who、Why、How）全面剖析 Nacos，希望对开发者们在服务发现和配置管理开源方案选型的时候，有所帮助。',
            link: '/en-us/blog/5w1h-what.html',
        },
        {
            title: 'Nacos服务发现控制台预览',
            author: '@dungu',
            dateStr: 'Oct 2nd, 2018',
            desc: '服务发现控制台的主要功能是服务列表的展示和搜索，以及服务配置、集群配置、实例配置的查询和更新。在0.3版本中，主要会有两个页面：服务列表和服务详情。',
            link: '/en-us/blog/discovery-console.html',
        },
        {
            title: 'Consul与kubernetes整合公告[翻译]',
            author: '@dungu',
            dateStr: 'Sept 2nd, 2018',
            desc: '本文翻译了Consul对于Kubernetes的整合所发布的公告文章（[原文地址](https://www.hashicorp.com/blog/consul-plus-kubernetes)）。Consul通过支持Service Mesh，并提供对Kubernetes的无缝支持，与目前最受社区热捧的产品进行绑定，并通过功能预告的形式，来达到对产品宣传效果的最大化。',
            link: '/en-us/blog/consul-k8s.html',
        },
        {
            title: 'Nacos 计划发布v0.2版本，进一步融合Dubbo和SpringCloud生态',
            author: '@wangchen',
            dateStr: 'Sept 21, 2018',
            desc: '在近期的Aliware Open Source 成都站的活动上，阿里巴巴高级工程师邢学超（于怀）分享了Nacos v0.2的规划和进度，并对Nacos v0.3的控制台进行了预览。Nacos v0.2将进一步融入Duboo和Spring Cloud生态，帮助开发者更好的在微服务场景下使用服务发现和动态配置管理。',
            link: '/en-us/blog/cengdu-dubbo.html',
        },
        {
            title: '微服务架构中基于DNS的服务发现',
            author: '@wangchen',
            dateStr: 'June 2nd, 2018',
            desc: '当前，微服务架构已经成为企业尤其是互联网企业技术选型的一个重要参考。微服务架构中涉及到很多模块，本文将重点介绍微服务架构的服务注册与发现以及如何基于DNS做服务发现。',
            link: '/en-us/blog/DNS-SD.html',
        },
        {
            title: 'Nacos - 阿里巴巴注册中心和配置中心开源计划',
            author: '@Penn(PingGuo)',
            dateStr: 'June 1st, 2018',
            desc: '阿里巴巴计划在7月份开启一个名叫Nacos的新开源项目, 在活动演讲中，坤宇介绍了这个开源项目的初衷，他表示 “将通过Nacos项目将阿里巴巴在建设共享服务体系中使用的服务发现、配置及服务管理平台贡献给开源社区"。',
            link: '/en-us/blog/Nacos-is-Coming.html',
        },
        {
            title: '阿里巴巴服务注册中心产品ConfigServer 10年技术发展回顾',
            author: '@muyi',
            dateStr: 'May 20th, 2018',
            desc: "本文简单描述了Eureka1.0存在的架构问题，Eureka2.0设想的架构。详细回顾了阿里巴巴的服务注册中心ConfigServer产品从2008年建设元年至今经历的关键架构演进。通过这个文章你会对基于AP模式的注册中心在技术发展过程中将会碰到的问题有所感知。",
            link: '/en-us/blog/alibaba-configserver.html',
        },
    ]
  },
  'zh-cn': {
    barText: '博客',
    postsTitle: '所有文章',
    list: [
        {   title: '阿里巴巴基于 Nacos 实现环境隔离的实践',
            author: '@正己',
            dateStr: 'Jun 5, 2019',
            desc: '说到环境隔离，首先应该搞清楚什么环境。 环境这个词目前还没有一个比较统一的定义，有些公司叫环境，在阿里云上叫region，在kubernetes架构中叫namespace等等。',
            link: '/zh-cn/blog/address-server.html',
        },
        {   title: 'Nacos 1.0.0 发布，正式大规模生产可用',
            author: '@敦谷',
            dateStr: 'Apr 10, 2019',
            desc: 'Nacos 1.0.0是正式GA的版本，在架构、功能和API设计上进行了全方位的重构和升级，在经过3个RC版本的社区体验之后正式发布，1.0.0版本标志着Nacos已经可以大规模在生产环境使用。',
            link: '/en-us/blog/nacos1.0.0.html',
        },
        {   title: 'Nacos 0.9.0 发布，稳定的快速迭代',
            author: '@邢学超 @风卿',
            dateStr: 'Mar 7, 2019',
            desc: 'Nacos一直秉承着稳定性和快速迭代，Nacos 0.9.0版本于上周正式发布release，功能围绕着，Nacos-Sync的稳定性、Server功能拆分部署、Nacos python语言体系的支持。',
            link: '/en-us/blog/nacos0.9.0.html',
        },
        {   title: 'Nacos 发布 v0.9.0',
            author: '@邢学超',
            dateStr: 'Feb 28, 2019',
            desc: '阿里巴巴微服务开源项目 [Dubbo Nacos](https://github.com/alibaba/nacos)  于本周发布v0.9.0版本，实现了server拆分功能和修复了13个issues。',
            link: '/en-us/blog/nacos0.9-intro.html',
        },
        {   title: 'Dubbo Nacos 发布 v0.8.0 PRE-GA版本，安全稳定上生产',
            author: '@张龙 @彦林 @风卿',
            dateStr: 'Jan 20, 2019',
            desc: '阿里巴巴微服务开源项目 [Dubbo Nacos](https://github.com/alibaba/nacos)  于本周发布v0.8.0（PRE-GA）版本，终于初步完成了Road Map一个重要的里程碑版本。',
            link: '/en-us/blog/nacos0.8.html',
        },
        {   title: '虎牙直播在微服务改造方面的实践和总结',
            author: '@张波',
            dateStr: 'Feb 10, 2019',
            desc: '文章整理自虎牙基础保障部中间件团队负责人张波（社区ID：zhangjimmy）在Dubbo Meetup 广州站沙龙上的分享，介绍虎牙在DNS、服务注册、CMDB和服务配置中心等方面的实践。',
            link: '/en-us/blog/huya-practice.html',
        },
        {   title: '虎牙直播共建Nacos生态',
            author: '@于怀',
            dateStr: 'Jan 10, 2019',
            desc: '虎牙中间件团队也深入参与了Nacos生态的构建，核心成员张波、周建、李志鹏参与构建了Nacos生态，把虎牙的业务模型和生产部署经验也共建到Nacos生态中。',
            link: '/en-us/blog/huya-nacos.html',
        },
        {   title: 'Nacos 有哪些典型的应用场景？—— 配置管理篇',
            author: '@何煦',
            dateStr: 'Dec 06, 2018',
            desc: '本文将围绕“Where”，讲述 Nacos 配置管理的三个典型的应用场景：数据库连接信息、限流阈值和降级开关、流量的动态调度',
            link: '/zh-cn/blog/5w1h-where.html',
        },
        {
            title: 'Nacos 发布 0.6 版本，支持Dubbo生态并且支持Docker部署',
            author: '@马昕曦、@张龙、@邢学超',
            dateStr: 'Nov 29, 2018',
            desc: '本文介绍了阿里巴巴的微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos) v0.6 版本，该版本主要在支持了Dubbo生态和Docker部署',
            link: '/zh-cn/blog/nacos0.6.html',
        },
        {
            title: '使用Nacos实现Spring Cloud Zuul的动态路由',
            author: '@叶志远',
            dateStr: 'Nov 29, 2018',
            desc: '本文介绍了如何基于阿里巴巴的微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos) 实现Spring Cloud 中基于zuul的动态路由能力',
            link: '/zh-cn/blog/dynamic-route-zuul-nacos.html',
        },
        {
            title: 'Nacos 计划发布v0.5版本，支持DNS-SD',
            author: '@kunyu @dungu',
            dateStr: 'Nov 25, 2018',
            desc: '阿里巴巴微服务开源项目[Dubbo Nacos](https://github.com/alibaba/nacos)于本周发布 v0.5.0 版本，该版本主要在 DNS-based Service Discovery，支持 TTL，支持 Java 11，优化Nacos产品用户体验，与Spring Cloud Gateway的集成等方面做了演进。',
            link: '/en-us/blog/nacos0.5.html',
        },
        {
            title: 'Nacos 进入CNCF landscape',
            author: '@xingxuechao',
            dateStr: 'Oct 28, 2018',
            desc: 'Nacos 被CNCF 纳入landscape大图',
            link: '/en-us/blog/cncf.html',
        },
        {   title: 'Nacos 帮我们解决什么问题？—— 配置管理篇',
            author: '@何煦',
            dateStr: 'Oct 17, 2018',
            desc: 'Nacos 是阿里巴巴今年7月份开源的项目，如其名， Naming and Configuration Service ，专注于服务发现和配置管理领域。本系列文章，将从 5W1H（What、Where、When、Who、Why、How）全面剖析 Nacos，希望对开发者们在服务发现和配置管理开源方案选型的时候，有所帮助。',
            link: '/zh-cn/blog/5w1h-what.html',
        },
        {
            title: 'Nacos服务发现控制台预览',
            author: '@dungu',
            dateStr: 'Oct 2nd, 2018',
            desc: '服务发现控制台的主要功能是服务列表的展示和搜索，以及服务配置、集群配置、实例配置的查询和更新。在0.3版本中，主要会有两个页面：服务列表和服务详情。',
            link: '/en-us/blog/discovery-console.html',
        },
        {
            title: 'Consul与kubernetes整合公告[翻译]',
            author: '@dungu',
            dateStr: 'Sept 2nd, 2018',
            desc: '本文翻译了Consul对于Kubernetes的整合所发布的公告文章（[原文地址](https://www.hashicorp.com/blog/consul-plus-kubernetes)）。Consul通过支持Service Mesh，并提供对Kubernetes的无缝支持，与目前最受社区热捧的产品进行绑定，并通过功能预告的形式，来达到对产品宣传效果的最大化。',
            link: '/en-us/blog/consul-k8s.html',
        },
        {
            title: 'Nacos 计划发布v0.2版本，进一步融合Dubbo和SpringCloud生态',
            author: '@wangchen',
            dateStr: 'Sept 21, 2018',
            desc: '在近期的Aliware Open Source 成都站的活动上，阿里巴巴高级工程师邢学超（于怀）分享了Nacos v0.2的规划和进度，并对Nacos v0.3的控制台进行了预览。Nacos v0.2将进一步融入Duboo和Spring Cloud生态，帮助开发者更好的在微服务场景下使用服务发现和动态配置管理。',
            link: '/en-us/blog/cengdu-dubbo.html',
        },
      {
        title: '微服务架构中基于DNS的服务发现',
        author: '@zhengji',
        dateStr: 'June 2nd, 2018',
        desc: '当前，微服务架构已经成为企业尤其是互联网企业技术选型的一个重要参考。微服务架构中涉及到很多模块，本文将重点介绍微服务架构的服务注册与发现以及如何基于DNS做服务发现。',
        link: '/zh-cn/blog/DNS-SD.html',
      },
      {
        title: 'Nacos - 阿里巴巴注册中心和配置中心开源计划',
        author: '@Penn(PingGuo)',
        dateStr: 'June 1st, 2018',
        desc: '阿里巴巴计划在7月份开启一个名叫Nacos的新开源项目, 在活动演讲中，坤宇介绍了这个开源项目的初衷，他表示 “将通过Nacos项目将阿里巴巴在建设共享服务体系中使用的服务发现、配置及服务管理平台贡献给开源社区"。',
        link: '/zh-cn/blog/Nacos-is-Coming.html',
      },
      {
        title: '阿里巴巴服务注册中心产品ConfigServer 10年技术发展回顾',
        author: '@muyi',
        dateStr: 'May 20th, 2018',
        desc: "本文简单描述了Eureka1.0存在的架构问题，Eureka2.0设想的架构。详细回顾了阿里巴巴的服务注册中心ConfigServer产品从2008年建设元年至今经历的关键架构演进。通过这个文章你会对基于AP模式的注册中心在技术发展过程中将会碰到的问题有所感知。",
        link: '/zh-cn/blog/alibaba-configserver.html',
      },
    ]
  },
};
