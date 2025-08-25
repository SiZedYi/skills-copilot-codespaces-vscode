function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'templates/skill-member.html'
    };
}